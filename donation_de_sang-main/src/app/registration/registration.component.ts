import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg = '';
  confirmPassword = '';
  acceptTerms = false;

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser(): void {
    this.msg = '';

    // Vérification des mots de passe
    if (!this.user.password || this.user.password.trim() === '') {
      this.msg = 'Veuillez entrer un mot de passe valide !';
      return;
    }
    if (this.user.password !== this.confirmPassword) {
      this.msg = 'Les mots de passe ne correspondent pas !';
      return;
    }

    // Vérification de l'acceptation des conditions
    if (!this.acceptTerms) {
      this.msg = 'Vous devez accepter les conditions générales !';
      return;
    }

    // Vérification des champs obligatoires
    if (!this.user.email || this.user.email.trim() === '') {
      this.msg = 'Veuillez entrer une adresse email valide !';
      return;
    }
    if (!this.user.username || this.user.username.trim() === '') {
      this.msg = 'Veuillez entrer un nom d\'utilisateur valide !';
      return;
    }

    // Affichage des données envoyées pour débogage
    console.log('Données envoyées :', this.user);

    this._service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('Inscription réussie:', data);
        localStorage.setItem('username', this.user.username);
        this._router.navigate(['/registrationsuccess']);
      },
      (error) => {
        console.error('Échec de l\'inscription:', error);
        
        if (error.status === 409) {
          this.msg = 'Un utilisateur avec cet email existe déjà !';
        } else if (error.status === 500) {
          this.msg = 'Erreur serveur, veuillez réessayer plus tard.';
        } else if (error.status === 400) {
          this.msg = 'Données invalides, vérifiez les champs.';
        } else {
          this.msg = 'Une erreur inconnue est survenue.';
        }
      }
    );
  }
}
