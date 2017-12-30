import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase'
import { AngularFireDatabase } from 'angularfire2/database';
import { SpeechRecognition } from "./speech-recognition";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private _SpeechRecognition: SpeechRecognition;
    private dbList: any;
    private user: any;
    private window: any = window;
    private textBody: HTMLElement;
    private finalResults: string = "";
    
    constructor(private _AngularFireAuth: AngularFireAuth,
        private _db: AngularFireDatabase) { }

    public ngOnInit(): void {
        this.initialise();
        this._AngularFireAuth.authState.subscribe((user: firebase.User) => {
            if (user) {
                this.updateStorage(user);
                this.initialiseDatabase();
            }
        });
    }

    private initialise(): void {
        this.textBody = document.getElementById('text');
        this._SpeechRecognition = new SpeechRecognition('en-Uk', true, true, 1);
        this._SpeechRecognition.onresult = this.onResult.bind(this);
        this._SpeechRecognition.start();
    }

    private onResult(event: any): void {
        var intermidiateResults = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
            var transcript = event.results[i][0].transcript;
            transcript.replace("\n", "<br>");
            if (event.results[i].isFinal) {
                this.finalResults += transcript;
            } else {
                intermidiateResults += transcript;
            }
        }
        this.finalResults = this.translatePanctuations(this.finalResults);
        intermidiateResults = this.translatePanctuations(intermidiateResults);
        this.textBody.innerHTML = this.finalResults + '<span style="color:#777">' + intermidiateResults + '</span>';
    }

    private translatePanctuations(message: string): string {
        message = message.replace(/full stop/ig, '.');
        message = message.replace(/comma/ig, ',');
        message = message.replace(/exclamation/ig, '!');
        message = message.replace(/question mark/ig, '?');

        message = message.replace(' .', '. ');
        message = message.replace(' ,', ', ');
        message = message.replace(' !', '! ');
        message = message.replace(' ?', '? ');

        message = message.replace('.  ', '. ');
        message = message.replace(',  ', ', ');
        message = message.replace('!  ', '! ');
        message = message.replace('?  ', '? ');

        return message.trim();
    }

    private logout(): void {
        this._AngularFireAuth.auth.signOut().then((response: any) => {
            this.user = null;
            sessionStorage.removeItem('user');
        });
    }

    private login(): void {
        this._AngularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    private updateStorage(user: any): void {
        this.user = {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerId,
            uid: user.uid
        };
        sessionStorage.setItem('user', JSON.stringify(this.user));
    }

    private initialiseDatabase(): void {
        if (this.user && this.user.uid) {
            this.dbList = this._db.list(`/${this.user.uid}/speech`);
            this.dbList.subscribe((response: any[]) => {
                console.log(response);
            });
        }
    }
}
