import Base from './lib/rave.base';
import Bank from './lib/rave.banks';
import Beneficiary from './lib/rave.beneficiaries';
import Bills from './lib/rave.bills';
import Charge from './lib/rave.charge';
import Ebills from './lib/rave.ebills';
import Misc from './lib/rave.misc';
import MobileMoney from './lib/rave.mobile_money';
import Security from './lib/security';
// import Custom from "./lib/rave.custom";
import Otps from './lib/rave.otps';
import PaymentPlan from './lib/rave.payment_plan';
import Settlement from './lib/rave.settlements';
import Subaccount from './lib/rave.subaccount';
import Subscription from './lib/rave.subscriptions';
import Tokenized from './lib/rave.tokenized';
import Transaction from './lib/rave.transactions';
import Transfer from './lib/rave.transfers';
import VirtualAccount from './lib/rave.virtual_account';
import VirtualCard from './lib/rave.virtual_cards';

class Rave {
  public Bank: Bank;
  public Beneficiary: Beneficiary;
  public Bills: Bills;
  public Charge: Charge;
  public Ebills: Ebills;
  public Misc: Misc;
  public MobileMoney: MobileMoney;
  public security: typeof Security;
  // public CustomRequest: Custom;
  public Otp: Otps;
  public PaymentPlan: PaymentPlan;
  public Settlement: Settlement;
  public Subscription: Subscription;
  public Subaccount: Subaccount;
  public Tokenized: Tokenized;
  public Transaction: Transaction;
  public Transfer: Transfer;
  public VirtualAcct: VirtualAccount;
  public VirtualCard: VirtualCard;

  constructor(public_key: string, public_secret: string, base_url_or_production_flag: string) {
    const ravebase = new Base(
      public_key,
      public_secret,
      base_url_or_production_flag,
    );

    this.Bank = new Bank(ravebase);
    this.Beneficiary = new Beneficiary(ravebase);
    this.Bills = new Bills(ravebase);
    this.Charge = new Charge(ravebase);
    this.Ebills = new Ebills(ravebase);
    this.Misc = new Misc(ravebase);
    this.MobileMoney = new MobileMoney(ravebase);
    this.security = Security;
    // this.CustomRequest = new Custom(ravebase);
    this.Otp = new Otps(ravebase);
    this.PaymentPlan = new PaymentPlan(ravebase);
    this.Settlement = new Settlement(ravebase);
    this.Subscription = new Subscription(ravebase);
    this.Subaccount = new Subaccount(ravebase);
    this.Tokenized = new Tokenized(ravebase);
    this.Transaction = new Transaction(ravebase);
    this.Transfer = new Transfer(ravebase);
    this.VirtualAcct = new VirtualAccount(ravebase);
    this.VirtualCard = new VirtualCard(ravebase);
  }

  public getIntegrityHash(data: any): string {
    return Base.getIntegrityHash(data);
  }
}

export default Rave;
