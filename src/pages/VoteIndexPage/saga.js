import { put, call} from "redux-saga/effects";
import { GetEOS } from "../../actions/EosAction";

const accountPrivateKey = '5K6g9pgX6QUqvNinK2CNAScNvq7dc9tqocTUq1X9HvtEj1xdjFq';
const accountName = "meetone33333";

// getVoteIndexPageAccountInfoPost
export function* getVoteIndexPageAccountInfoPost() {
    try {
      const res = yield call(getAccountByEos);
      yield put({ type: "VOTEINDEX_SETACCOUNTINFO_REDUCER", data: res });
    } catch (err) {}
}
function getAccountByEos() {
  const eos = GetEOS(accountPrivateKey);
  return eos.getAccount( { 'account_name': accountName } ).then(( result ) => {
      return result;
    });
}

// getVoteIndexPageCurrencyBalancePost
export function* getVoteIndexPageCurrencyBalancePost () {
  try {
    const response = yield call(getCurrencyBalance);
    yield put({ type: "VOTEINDEX_SETCURRENCYBALANCE_REDUCER", data: response });
  } catch (err) {}
}
function getCurrencyBalance() {
  const eos = GetEOS(accountPrivateKey);
  return eos.getCurrencyBalance( { "code": "eosio.token", "account": accountName }).then(( res ) => {
    const balance = Number(res[0].replace(" SYS", ""));
    return balance;
  });
}

// getVoteIndexPageRefundsPost
export function* getVoteIndexPageRefundsPost () {
  try {
    const response = yield call(getRefunds);
    yield put({ type: "VOTEINDEX_SETREFUNDS_REDUCER", data: response });
  } catch (err) {}
}
function getRefunds() {
  const eos = GetEOS(accountPrivateKey);
  return eos.getTableRows({
    'json': true,
    'code': 'eosio',
    'scope': 'eosiomeetone',
    'table': 'refunds',
    'table_key': 'owner'
  }).then(function (result) {
    const refunds = result.rows[0] ? Number(result.rows[0].cpu_amount.replace(" SYS", ""))+Number(result.rows[0].net_amount.replace(" SYS", "")) : 0;
    return refunds;
  });
}

// getVoteIndexPageBpsPost
export function* getVoteIndexPageBpsPost () {
  try {
    const response = yield call(getBps);
    yield put({ type: "VOTEINDEX_SETBPS_REDUCER", data: response });
  } catch (err) {}
}
function getBps() {
  const eos = GetEOS(accountPrivateKey);
  return eos.getProducers( { json: true } ).then( result => {
    return result.rows;
  } );
}

