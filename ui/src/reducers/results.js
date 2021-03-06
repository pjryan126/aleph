import { createReducer } from 'redux-act';

import { updateResults, updateLoading, flushResults } from 'src/reducers/util';

import {
  queryCollections,
  queryEntities,
  queryDocumentRecords,
  queryNotifications,
  createCollection,
  deleteCollection,
} from 'src/actions';

const initialState = {};

export default createReducer({
  [queryCollections.START]: updateLoading(true),
  [queryCollections.ERROR]: updateLoading(false),
  [queryCollections.COMPLETE]: updateResults,
  [queryEntities.START]: updateLoading(true),
  [queryEntities.ERROR]: updateLoading(false),
  [queryEntities.COMPLETE]: updateResults,
  [queryDocumentRecords.START]: updateLoading(true),
  [queryDocumentRecords.ERROR]: updateLoading(false),
  [queryDocumentRecords.COMPLETE]: updateResults,
  [queryNotifications.START]: updateLoading(true),
  [queryNotifications.ERROR]: updateLoading(false),
  [queryNotifications.COMPLETE]: updateResults,

  // Clear out the results cache when operations are performed that
  // may affect the content of the results.
  [createCollection.COMPLETE]: flushResults,
  [deleteCollection.COMPLETE]: flushResults,
  // [ingestDocument.COMPLETE]: flushResults
}, initialState);
