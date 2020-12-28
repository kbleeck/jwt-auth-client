import { AuthService } from './auth.service';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[hasRole]',
})
export class HasRoleDirective {
    @Input() hasRole: string;

    @Input() hasRoleElseUseTemplate: TemplateRef<any>;

    constructor(
        private template: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private auth: AuthService
    ) {}

    ngOnInit() {
        this.auth.user$.subscribe((user) => {
            const hasRole = user?.roles.includes(this.hasRole);
            if (hasRole) {
                // Render normal template
                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.template);
            } else {
                // Render backup template
                this.viewContainer.clear();
                if (this.hasRoleElseUseTemplate) {
                    this.viewContainer.createEmbeddedView(
                        this.hasRoleElseUseTemplate
                    );
                }
            }
        });
    }
}
