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

        createMany: procedure.input($Schema.GrantDirectoryInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grantDirectory.createMany(input as any))),

        create: procedure.input($Schema.GrantDirectoryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grantDirectory.create(input as any))),

        deleteMany: procedure.input($Schema.GrantDirectoryInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grantDirectory.deleteMany(input as any))),

        delete: procedure.input($Schema.GrantDirectoryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grantDirectory.delete(input as any))),

        findFirst: procedure.input($Schema.GrantDirectoryInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).grantDirectory.findFirst(input as any))),

        findMany: procedure.input($Schema.GrantDirectoryInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).grantDirectory.findMany(input as any))),

        findUnique: procedure.input($Schema.GrantDirectoryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).grantDirectory.findUnique(input as any))),

        updateMany: procedure.input($Schema.GrantDirectoryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grantDirectory.updateMany(input as any))),

        update: procedure.input($Schema.GrantDirectoryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).grantDirectory.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.GrantDirectoryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantDirectoryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantDirectoryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantDirectoryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.GrantDirectoryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantDirectoryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.GrantDirectoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.GrantDirectoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantDirectoryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantDirectoryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.GrantDirectoryGetPayload<T>, Context>) => Promise<Prisma.GrantDirectoryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.GrantDirectoryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantDirectoryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantDirectoryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantDirectoryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.GrantDirectoryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantDirectoryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.GrantDirectoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.GrantDirectoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantDirectoryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantDirectoryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.GrantDirectoryGetPayload<T>, Context>) => Promise<Prisma.GrantDirectoryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.GrantDirectoryFindFirstArgs, TData = Prisma.GrantDirectoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.GrantDirectoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GrantDirectoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.GrantDirectoryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.GrantDirectoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GrantDirectoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GrantDirectoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.GrantDirectoryFindManyArgs, TData = Array<Prisma.GrantDirectoryGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.GrantDirectoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.GrantDirectoryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.GrantDirectoryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.GrantDirectoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.GrantDirectoryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.GrantDirectoryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.GrantDirectoryFindUniqueArgs, TData = Prisma.GrantDirectoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.GrantDirectoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GrantDirectoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.GrantDirectoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.GrantDirectoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GrantDirectoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GrantDirectoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.GrantDirectoryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantDirectoryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantDirectoryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantDirectoryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.GrantDirectoryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GrantDirectoryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.GrantDirectoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.GrantDirectoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GrantDirectoryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GrantDirectoryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.GrantDirectoryGetPayload<T>, Context>) => Promise<Prisma.GrantDirectoryGetPayload<T>>
            };

    };
}
