// 引入公共组件
import React, { Component } from "react";
import {connect} from "react-redux";
import { injectIntl } from 'react-intl';
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";

// 自定义组件
import { styles, assetStyles, voteStyles, voteBpsStales } from "./style";
import messages from './messages';

class VoteIndexPage extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps( nextProps ) {}

    componentDidMount() {
      this.props.onDispatchGetAccountInfoPost();
      this.props.onDispatchGetCurrencyBalancePost();
      this.props.onDispatchGetRefundsPost();
      this.props.onDispatchGetVoteBpsPost();
      this.props.onDispatchGetVoteUsdPost();
    }

    render() {
      const { account_name, total_resources, delegated_bandwidth } = this.props.accountInfo;
      const { ram_bytes } = total_resources;
      const { cpu_weight, net_weight } = delegated_bandwidth;
      const stake = Number(net_weight.replace(" SYS", "")) + Number(cpu_weight.replace(" SYS", ""));
      const CurrencyBalance = this.props.CurrencyBalance;
      const Refunds = this.props.Refunds;
      const TotalAsset = stake + CurrencyBalance + Refunds;
      const TotalAssetByUsd = TotalAsset * this.props.USD;
      const BPs = this.props.BPs;
      const { intl } = this.props;
      const userNameIntl = intl.formatMessage(messages.userName);
      const TotalAssetIntl = intl.formatMessage(messages.TotalAsset);
      const RefundingIntl = intl.formatMessage(messages.Refunding);
      const BalanceIntl = intl.formatMessage(messages.Balance);
      const RAMBytesIntl = intl.formatMessage(messages.RAMBytes);
      const VoteIntl = intl.formatMessage(messages.Vote);
      const VoteDescIntl = intl.formatMessage(messages.VoteDesc);
      const UndelegatebwIntl = intl.formatMessage(messages.Undelegatebw);
      const AddDelegatebwIntl = intl.formatMessage(messages.AddDelegatebw);
      const RevoteIntl = intl.formatMessage(messages.Revote);
      const VotedBpsIntl = intl.formatMessage(messages.VotedBps);
        return (
            <View style={styles.bodyBox}>
                <ScrollView style={styles.contentBox}>
                  <View style={styles.contentTitleBox}>
                    <Text style={styles.contentTitle}>EOS</Text>
                  </View>
                  <View style={assetStyles.contentAssetBox}>
                    <View style={assetStyles.totalAssetBox}>
                      <View style={assetStyles.userNameBox}>
                        <Text style={assetStyles.userNameTip}>
                          {userNameIntl}:  <Text style={assetStyles.userName}>{account_name}</Text>
                        </Text>
                      </View>
                      <View style={assetStyles.userTotalAssetBox}>
                        <Text style={assetStyles.userTotalAssetTip}>{TotalAssetIntl}</Text>
                        <Text style={assetStyles.userTotalAssetValue}>
                          {TotalAsset} <Text style={assetStyles.userTotalAssetValueUnit}>EOS</Text>
                        </Text>
                      </View>
                      <Text style={assetStyles.userTotalAssetByUsd}>≈ ${TotalAssetByUsd}</Text>
                    </View>
                    <View style={assetStyles.assetItemBox}>
                      <View style={assetStyles.itemBox}>
                        <Text style={assetStyles.itemName}>
                          {RefundingIntl}
                        </Text>
                        <Text style={assetStyles.itemValue}>
                          {Refunds} <Text style={assetStyles.itemValueUnit}>EOS</Text>
                        </Text>
                      </View>
                      <View style={assetStyles.itemBox}>
                        <Text style={assetStyles.itemName}>{BalanceIntl}</Text>
                        <Text style={assetStyles.itemValue}>
                          {CurrencyBalance} <Text style={assetStyles.itemValueUnit}>EOS</Text>
                        </Text>
                      </View>
                      <View style={[assetStyles.itemBox, {borderBottomWidth: 0,}]}>
                        <Text style={assetStyles.itemName}>{RAMBytesIntl}</Text>
                        <Text style={assetStyles.itemValue}>{ram_bytes}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={voteStyles.contentVoteBox}>
                    <Text style={voteStyles.voteTitle}>{VoteIntl}</Text>
                    <Text style={voteStyles.voteDesc}>{VoteDescIntl}</Text>
                    <View style={voteStyles.voteItemList}>
                      <TouchableOpacity style={voteStyles.voteItem} onPress={() => {this.props.navigation.navigate("UnDelegatebwPage")}}>
                        <Text style={voteStyles.voteItemName}>{UndelegatebwIntl}</Text>
                        <Image style={[voteStyles.voteItemActionIcon, {width: 16, height: 20,}]} source={require("./images/arrow-right-account.png")} />
                      </TouchableOpacity>
                      <TouchableOpacity style={voteStyles.voteItem} onPress={() => {this.props.navigation.navigate("DelegatebwPage")}}>
                        <Text style={voteStyles.voteItemName}>{AddDelegatebwIntl}</Text>
                        <Image style={[voteStyles.voteItemActionIcon, {width: 16, height: 20,}]} source={require("./images/arrow-right-account.png")} />
                      </TouchableOpacity>
                      <TouchableOpacity style={voteStyles.voteItem} onPress={() => {this.props.navigation.navigate("NodeListPage")}}>
                        <Text style={voteStyles.voteItemName}>{RevoteIntl}</Text>
                        <Image style={[voteStyles.voteItemActionIcon, {width: 16, height: 20,}]} source={require("./images/arrow-right-account.png")} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={voteBpsStales.contentVoteBpsBox}>
                    <View style={voteBpsStales.VoteBpsTitleBox}>
                      <View style={voteBpsStales.VoteBpsTitleFlg}></View>
                      <Text style={voteBpsStales.VoteBpsTitle}>{VotedBpsIntl}</Text>
                    </View>
                    <View style={voteBpsStales.VoteBpsList}>
                      {BPs.map((item) => (
                        <View key={item.total_votes} style={voteBpsStales.VoteBpsItem}>
                          <Text style={voteBpsStales.VoteBpsItemName}>{item.owner}</Text>
                          <Text style={voteBpsStales.VoteBpsItemDesc}>{item.total_votes} Voter Choise</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  <View style={styles.bodyFooterBox}>
                    <View style={styles.bodyFooterFlg}></View>
                  </View>
                  <View style={{height: 100}}></View>
                </ScrollView>
            </View>
        );
    }
    // RefundingCountdown = (creatTime) => {
    //   const totalTime = 3*24*60*60;
    //   let newCreatTime = new Date(creatTime);
    //   newCreatTime = newCreatTime.getTime();
    //   let cuntDownTime = totalTime - newCreatTime;
    //   setInterval(()=> {
    //     cuntDownTime--;
    //     this.setState({
    //
    //     });
    //   },1000);
    // };
}

// 挂载中间件到组件；
function mapDispatchToProps(dispatch) {
    return {
        onDispatchGetAccountInfoPost: () => dispatch({ type: "VOTE_INDEX_ACCOUNTINFO_POST" }),
        onDispatchGetCurrencyBalancePost: () => dispatch({ type: "VOTE_INDEX_CURRENCYBALANCE_POST" }),
        onDispatchGetRefundsPost: () => dispatch({ type: "VOTE_INDEX_REFUNDS_POST" }),
        onDispatchGetVoteBpsPost: () => dispatch({ type: "VOTE_INDEX_BPS_POST" }),
        onDispatchGetVoteUsdPost: () => dispatch({ type: "VOTE_INDEX_GETUSDPRICE_POST" }),
    };
}

function mapStateToProps(state) {
    return {
        accountInfo: state.VoteIndexPageReducer.accountInfo,
        CurrencyBalance: state.VoteIndexPageReducer.CurrencyBalance,
        Refunds: state.VoteIndexPageReducer.Refunds,
        BPs: state.VoteIndexPageReducer.BPs,
        USD: state.VoteIndexPageReducer.USD,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(VoteIndexPage));
