import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type LibraryTrackError = {
  __typename?: 'LibraryTrackError';
  message: Scalars['String']['output'];
};

export type LibraryTrackResponse = LibraryTrackError | LibraryTrackResult;

export type LibraryTrackResult = {
  __typename?: 'LibraryTrackResult';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type LibraryTrackResults = {
  __typename?: 'LibraryTrackResults';
  tracks: Array<Maybe<LibraryTrackResult>>;
};

export type LibraryTracksResponse = LibraryTrackError | LibraryTrackResults;

export type Mutation = {
  __typename?: 'Mutation';
  createLibraryTrack: LibraryTrackResponse;
  deleteLibraryTrack: LibraryTrackResponse;
};


export type MutationCreateLibraryTrackArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteLibraryTrackArgs = {
  trackId?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  libraryTrack: LibraryTrackResponse;
  libraryTracks: LibraryTracksResponse;
};


export type QueryLibraryTrackArgs = {
  trackId: Scalars['Int']['input'];
};


export type QueryLibraryTracksArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  trackIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  LibraryTrackResponse: ( LibraryTrackError ) | ( LibraryTrackResult );
  LibraryTracksResponse: ( LibraryTrackError ) | ( LibraryTrackResults );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LibraryTrackError: ResolverTypeWrapper<LibraryTrackError>;
  LibraryTrackResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['LibraryTrackResponse']>;
  LibraryTrackResult: ResolverTypeWrapper<LibraryTrackResult>;
  LibraryTrackResults: ResolverTypeWrapper<LibraryTrackResults>;
  LibraryTracksResponse: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['LibraryTracksResponse']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  LibraryTrackError: LibraryTrackError;
  LibraryTrackResponse: ResolversUnionTypes<ResolversParentTypes>['LibraryTrackResponse'];
  LibraryTrackResult: LibraryTrackResult;
  LibraryTrackResults: LibraryTrackResults;
  LibraryTracksResponse: ResolversUnionTypes<ResolversParentTypes>['LibraryTracksResponse'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
};

export type LibraryTrackErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['LibraryTrackError'] = ResolversParentTypes['LibraryTrackError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraryTrackResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LibraryTrackResponse'] = ResolversParentTypes['LibraryTrackResponse']> = {
  __resolveType: TypeResolveFn<'LibraryTrackError' | 'LibraryTrackResult', ParentType, ContextType>;
};

export type LibraryTrackResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LibraryTrackResult'] = ResolversParentTypes['LibraryTrackResult']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraryTrackResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LibraryTrackResults'] = ResolversParentTypes['LibraryTrackResults']> = {
  tracks?: Resolver<Array<Maybe<ResolversTypes['LibraryTrackResult']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraryTracksResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LibraryTracksResponse'] = ResolversParentTypes['LibraryTracksResponse']> = {
  __resolveType: TypeResolveFn<'LibraryTrackError' | 'LibraryTrackResults', ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createLibraryTrack?: Resolver<ResolversTypes['LibraryTrackResponse'], ParentType, ContextType, RequireFields<MutationCreateLibraryTrackArgs, 'name'>>;
  deleteLibraryTrack?: Resolver<ResolversTypes['LibraryTrackResponse'], ParentType, ContextType, Partial<MutationDeleteLibraryTrackArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  libraryTrack?: Resolver<ResolversTypes['LibraryTrackResponse'], ParentType, ContextType, RequireFields<QueryLibraryTrackArgs, 'trackId'>>;
  libraryTracks?: Resolver<ResolversTypes['LibraryTracksResponse'], ParentType, ContextType, Partial<QueryLibraryTracksArgs>>;
};

export type Resolvers<ContextType = any> = {
  LibraryTrackError?: LibraryTrackErrorResolvers<ContextType>;
  LibraryTrackResponse?: LibraryTrackResponseResolvers<ContextType>;
  LibraryTrackResult?: LibraryTrackResultResolvers<ContextType>;
  LibraryTrackResults?: LibraryTrackResultsResolvers<ContextType>;
  LibraryTracksResponse?: LibraryTracksResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

