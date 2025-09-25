// 定义节点类型枚举
export enum NodeType {
  FUND = 'fund',           // 第1层：基金
  CUSTODY = 'custody',     // 第2层：托管机构
  INSTRUCTION = 'instruction', // 第3层：划款指令
  TRADE_ORDER = 'tradeOrder'   // 第4层：成交单
}

// 定义数据类型
export interface TradeOrder {
  id: string;
  nodeType: NodeType;
  selected: boolean;
  instructionStatus: string;
  validStatus: string;
  fundSettlementStatus: string;
  tradeOrderNumber: string;
  tradeType: string;
  tradeVarietyCode: string;
  tradeVariety: string;
  bondName: string;
  settlementDate: string;
  settlementMethod: string;
  settlementAmount: number;
  purpose: string;
  children?: TradeOrder[];
}

export interface TransferInstruction {
  id: string;
  nodeType: NodeType;
  selected: boolean;
  transferInstructionNumber: string;
  transferInstructionAmount: number;
  transferProgress: string;
  children: TradeOrder[];
}

export interface CustodyInstitution {
  id: string;
  nodeType: NodeType;
  selected: boolean;
  autoClearingStatus: string;
  transferApplicationStatus: string;
  pendingReminder: string;
  accountingProgress: string;
  custodyProgress: string;
  custodyInstitution: string;
  accountBalance: number;
  effectiveSettlementBalance: number;
  generatedTransferAmount: number;
  ungeneratedTransferAmount: number;
  children: TransferInstruction[];
}

export interface FundData {
  id: string;
  nodeType: NodeType;
  selected: boolean;
  fundCode: string;
  fundName: string;
  ossBankBalance: number;
  endDayBankDeposit: number;
  endDayBankDepositWithInquiry: number;
  custodyBank: string;
  trader1: string;
  trader2: string;
  requiredTransferAmount: number;
  children: CustodyInstitution[];
}

export interface StatusFilters {
  bondDistribution: boolean;
  fundManagerUnconfirmed: boolean;
  multipleReminders: boolean;
  noReminders: boolean;
  t0TradeUnsettled: boolean;
  accountingTimeout: boolean;
  custodyTimeout: boolean;
  awaitingUnlocking: boolean;
}