import { put, call} from "redux-saga/effects";
import { GetEOS } from "../../actions/EosAction";

const accountPrivateKey = '5K6g9pgX6QUqvNinK2CNAScNvq7dc9tqocTUq1X9HvtEj1xdjFq';
const accountName = "meetone33333";

// getDelegatebwPageAccountInfoPost
export function* getDelegatebwPageAccountInfoPost() {
  try {
    const response = yield call(getAccount);
    yield put({ type: "DELEGATEBW_SETACCOUNTINFO_REDUCER", data: response });
  } catch (err) {}
}
function getAccount() {
  const eos = GetEOS(accountPrivateKey);
  return eos.getAccount( { 'account_name': accountName } ).then( result => {
    return result;
  } );
}

// getDelegatebwPageCurrencyBalancePost
export function* getDelegatebwPageCurrencyBalancePost () {
  try {
    const response = yield call(getCurrencyBalance);
    yield put({ type: "DELEGATEBW_SETCURRENCYBALANCE_REDUCER", data: response });
  } catch (err) {}
}
function getCurrencyBalance() {
  const eos = GetEOS(accountPrivateKey);
  return eos.getCurrencyBalance( {
    "code": "eosio.token",
    "account": accountName,
  } ).then( ( res ) => {
    const balance = Number(res[0].replace(" SYS", ""));
    return balance;
  } );
}

// getDelegatebwPageConfirmPost
export function* getDelegatebwPageConfirmPost (action) {
  try {
    yield call(delegatebw, action);
  } catch (err) {}
}
function delegatebw(action) {
  const eos = GetEOS(accountPrivateKey);
  return eos.transaction( tr => {
    tr.delegatebw(action.data);
  } ).then( function ( result ) {
    if (result.broadcast) {
      action.nav.goBack();
    }
  } );
}
