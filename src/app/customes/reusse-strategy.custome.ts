import { ActivatedRouteSnapshot, BaseRouteReuseStrategy } from '@angular/router';

export class ReuseStrategyCustome extends BaseRouteReuseStrategy {
    public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr:ActivatedRouteSnapshot){
        return false;
    } 
}