import { Injectable } from '@angular/core'

import { Headers, Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SunshineService{    
    private url = 'https://sunshineng.pythonanywhere.com';    
	constructor(protected http: Http){        
	}

    parseParameters(parameters) : string{
        // Function to convert parameters dict to url argument string 
        let parameterString = '';
        console.log(parameters);
        // let count = 0;
        for(var parameter in parameters){
            parameterString += "/" + parameters[parameter];      
        }
        console.log(parameterString);
        return parameterString
    }

    getPowerOutput(parameters){
        let targetUrl = this.url + '/data/send';
        targetUrl += this.parseParameters(parameters);
        console.log(targetUrl);
        return this.http.get(targetUrl)
        .map(res => res.json());
    }

}
