
import type { DefinitionsCall } from '../../types/index.ts';

export const runtime: DefinitionsCall = {
  ValidateStatement: [
    {
      methods: {
        valdate_statement: {
          description: 'Validate the statement.',
          params: [
            {
              name: 'source',
              type: 'StatementStoreStatementSource'
            },
            {
              name: 'statement',
              type: 'SpStatementStoreStatement'
            }
          ],
          type: 'Result<StatementStoreValidStatement, StatementStoreInvalidStatement>'
        }
      },
      version: 1
    }
  ]
};
