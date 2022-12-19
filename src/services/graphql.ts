import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Graphql extends Service {

     constructor(client: Client)
     {
        super(client);
     }

        /**
         * GraphQL Endpoint
         *
         * Execute a GraphQL query.
         *
         * @param {string} query
         * @param {string} operationName
         * @param {string} variables
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async 63a0228e7e93a(query: string, operationName?: string, variables?: string): Promise<{}> {
            if (typeof query === 'undefined') {
                throw new AppwriteException('Missing required parameter: "query"');
            }

            let path = '/graphql';
            let payload: Payload = {};

            if (typeof query !== 'undefined') {
                payload['query'] = query;
            }

            if (typeof operationName !== 'undefined') {
                payload['operationName'] = operationName;
            }

            if (typeof variables !== 'undefined') {
                payload['variables'] = variables;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * GraphQL Endpoint
         *
         * Execute a GraphQL mutation.
         *
         * @param {object} query
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async query(query: object): Promise<{}> {
            if (typeof query === 'undefined') {
                throw new AppwriteException('Missing required parameter: "query"');
            }

            let path = '/graphql';
            let payload: Payload = {};

            if (typeof query !== 'undefined') {
                payload['query'] = query;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('post', uri, {
                'x-sdk-graphql': 'true',
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * GraphQL Endpoint
         *
         * Execute a GraphQL mutation.
         *
         * @param {object} query
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async mutation(query: object): Promise<{}> {
            if (typeof query === 'undefined') {
                throw new AppwriteException('Missing required parameter: "query"');
            }

            let path = '/graphql/mutation';
            let payload: Payload = {};

            if (typeof query !== 'undefined') {
                payload['query'] = query;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('post', uri, {
                'x-sdk-graphql': 'true',
                'content-type': 'application/json',
            }, payload);
        }
};
