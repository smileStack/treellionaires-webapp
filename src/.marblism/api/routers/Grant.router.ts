/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.GrantInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grant.createMany(input as any))),

        create: procedure.input($Schema.GrantInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grant.create(input as any))),

        deleteMany: procedure.input($Schema.GrantInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grant.deleteMany(input as any))),

        delete: procedure.input($Schema.GrantInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grant.delete(input as any))),

        findFirst: procedure.input($Schema.GrantInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).grant.findFirst(input as any))),

        findMany: procedure.input($Schema.GrantInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).grant.findMany(input as any))),

        findUnique: procedure.input($Schema.GrantInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).grant.findUnique(input as any))),

        updateMany: procedure.input($Schema.GrantInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grant.updateMany(input as any))),

        update: procedure.input($Schema.GrantInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grant.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.GrantCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.GrantCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.GrantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.GrantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.GrantGetPayload<T>, Context>) => Promise<Prisma.GrantGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.GrantDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.GrantDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.GrantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.GrantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.GrantGetPayload<T>, Context>) => Promise<Prisma.GrantGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.GrantFindFirstArgs, TData = Prisma.GrantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.GrantFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GrantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.GrantFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.GrantFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GrantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GrantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.GrantFindManyArgs, TData = Array<Prisma.GrantGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.GrantFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.GrantGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.GrantFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.GrantFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.GrantGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.GrantGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.GrantFindUniqueArgs, TData = Prisma.GrantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.GrantFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GrantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.GrantFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.GrantFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GrantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GrantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.GrantUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.GrantUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.GrantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.GrantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.GrantGetPayload<T>, Context>) => Promise<Prisma.GrantGetPayload<T>>
            };

    };
}
