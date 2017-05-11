"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var dashboard_componetn_1 = require("./components/dashboard/dashboard.componetn");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_componetn_1.DashboardComponent },
    { path: '**', redirectTo: '/login' }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=router.js.map