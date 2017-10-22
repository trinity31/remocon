import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class CommandService {
    private url = 'http://localhost:3000/disconnect';
    
    constructor(private http:Http) {}
    
    disconnectSTA(mac: string) {
        const body = JSON.stringify({
            mac: mac
        });
        const headers = new Headers({'Content-Type': 'application/json'});

        console.log("disconnect ", mac);

        return this.http.post('http://localhost:3000/disconnect', body, {headers:headers})
            .map((response: Response) => {
                const result = response.json(); //map function automatically throw Observable
                console.log("success");
            })
            .catch((error:Response) => Observable.throw(error.json())
        );
    }
}