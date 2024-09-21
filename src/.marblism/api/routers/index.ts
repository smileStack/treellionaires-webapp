/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createGrantRouter from "./Grant.router";
import createEventRouter from "./Event.router";
import createGrantDirectoryRouter from "./GrantDirectory.router";
import createApplicationRouter from "./Application.router";
import createDocumentRouter from "./Document.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createRagVectorRouter from "./RagVector.router";
import createSessionRouter from "./Session.router";
import { ClientType as GrantClientType } from "./Grant.router";
import { ClientType as EventClientType } from "./Event.router";
import { ClientType as GrantDirectoryClientType } from "./GrantDirectory.router";
import { ClientType as ApplicationClientType } from "./Application.router";
import { ClientType as DocumentClientType } from "./Document.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        grant: createGrantRouter(router, procedure),
        event: createEventRouter(router, procedure),
        grantDirectory: createGrantDirectoryRouter(router, procedure),
        application: createApplicationRouter(router, procedure),
        document: createDocumentRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    grant: GrantClientType<AppRouter>;
    event: EventClientType<AppRouter>;
    grantDirectory: GrantDirectoryClientType<AppRouter>;
    application: ApplicationClientType<AppRouter>;
    document: DocumentClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
