export const fundData = [
  {
    id: '1',
    fundCode: '000001',
    fundName: '增金宝货币A',
    ossBankBalance: 1.00,
    endDayBankDeposit: 1000000.00,
    endDayBankDepositWithInquiry: 1000000.00,
    custodyBank: '020-12345678',
    trader1: '张三三',
    trader2: '李思思',
    requiredTransferAmount: 1000000.00,
    custodyInstitutions: [
      {
        id: '1-1',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '已完成',
        custodyProgress: '进行中',
        custodyInstitution: '中信银行',
        accountBalance: 1000000000.00,
        effectiveSettlementBalance: 1000000.00,
        generatedTransferAmount: 1000000.00,
        ungeneratedTransferAmount: 1000000.00,
        transferInstructions: [
          {
            id: '1-1-1',
            transferInstructionNumber: '000000000000000001',
            transferInstructionAmount: 500000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '1-1-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '11111111111111111111',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00001',
                tradeVariety: '正回购到期',
                bondName: '--',
                settlementDate: '2025-03-01',
                settlementMethod: '券款对付',
                settlementAmount: 1000000.00,
                purpose: '七天正回购'
              },
              {
                id: '1-1-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '11111111111111111112',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00001',
                tradeVariety: '正回购到期',
                bondName: '--',
                settlementDate: '2025-03-01',
                settlementMethod: '券款对付',
                settlementAmount: 800000.00,
                purpose: '七天正回购'
              }
            ]
          },
          {
            id: '1-1-2',
            transferInstructionNumber: '000000000000000002',
            transferInstructionAmount: 500000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '1-1-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '11111111111111111113',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00003',
                tradeVariety: '国债现券',
                bondName: '3年期国债',
                settlementDate: '2025-03-01',
                settlementMethod: '券款对付',
                settlementAmount: 500000.00,
                purpose: '资产配置'
              },
              {
                id: '1-1-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '11111111111111111114',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00003',
                tradeVariety: '国债现券',
                bondName: '5年期国债',
                settlementDate: '2025-03-01',
                settlementMethod: '券款对付',
                settlementAmount: 600000.00,
                purpose: '资产配置'
              }
            ]
          }
        ]
      },
      {
        id: '1-2',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '已完成',
        custodyProgress: '进行中',
        custodyInstitution: '上海清算所',
        accountBalance: 800000000.00,
        effectiveSettlementBalance: 800000.00,
        generatedTransferAmount: 800000.00,
        ungeneratedTransferAmount: 800000.00,
        transferInstructions: [
          {
            id: '1-2-1',
            transferInstructionNumber: '000000000000000003',
            transferInstructionAmount: 400000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '1-2-1-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '11111111111111111115',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00004',
                tradeVariety: '企业债现券',
                bondName: '某企业债券A',
                settlementDate: '2025-03-01',
                settlementMethod: '纯券过户',
                settlementAmount: 600000.00,
                purpose: '投资调整'
              },
              {
                id: '1-2-1-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '11111111111111111116',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00004',
                tradeVariety: '企业债现券',
                bondName: '某企业债券B',
                settlementDate: '2025-03-01',
                settlementMethod: '纯券过户',
                settlementAmount: 700000.00,
                purpose: '投资调整'
              }
            ]
          },
          {
            id: '1-2-2',
            transferInstructionNumber: '000000000000000004',
            transferInstructionAmount: 400000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '1-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '11111111111111111117',
                tradeType: '卖出回购',
                tradeVarietyCode: 'R00002',
                tradeVariety: '逆回购',
                bondName: '--',
                settlementDate: '2025-03-01',
                settlementMethod: '券款对付',
                settlementAmount: 800000.00,
                purpose: '流动性管理'
              },
              {
                id: '1-2-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '11111111111111111118',
                tradeType: '卖出回购',
                tradeVarietyCode: 'R00002',
                tradeVariety: '逆回购',
                bondName: '--',
                settlementDate: '2025-03-01',
                settlementMethod: '券款对付',
                settlementAmount: 900000.00,
                purpose: '流动性管理'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    fundCode: '000002',
    fundName: '增金宝货币B',
    ossBankBalance: 2.00,
    endDayBankDeposit: 2000000.00,
    endDayBankDepositWithInquiry: 2000000.00,
    custodyBank: '020-87654321',
    trader1: '王五五',
    trader2: '赵六六',
    requiredTransferAmount: 2000000.00,
    custodyInstitutions: [
      {
        id: '2-1',
        autoClearingStatus: '已生成',
        transferApplicationStatus: '未生成',
        pendingReminder: '已办',
        accountingProgress: '超时',
        custodyProgress: '已完成',
        custodyInstitution: '招商银行广州分行',
        accountBalance: 2000000000.00,
        effectiveSettlementBalance: 2000000.00,
        generatedTransferAmount: 2000000.00,
        ungeneratedTransferAmount: 2000000.00,
        transferInstructions: [
          {
            id: '2-1-1',
            transferInstructionNumber: '000000000000000005',
            transferInstructionAmount: 1000000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '2-1-1-1',
                instructionStatus: '已生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '22222222222222222221',
                tradeType: '买入返售',
                tradeVarietyCode: 'B00001',
                tradeVariety: '企业债买入',
                bondName: '某企业债券',
                settlementDate: '2025-03-02',
                settlementMethod: '纯券过户',
                settlementAmount: 2000000.00,
                purpose: '投资交易'
              },
              {
                id: '2-1-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '22222222222222222222',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00005',
                tradeVariety: '政策性金融债',
                bondName: '国开债5年期',
                settlementDate: '2025-03-02',
                settlementMethod: '券款对付',
                settlementAmount: 1500000.00,
                purpose: '资产配置'
              }
            ]
          },
          {
            id: '2-1-2',
            transferInstructionNumber: '000000000000000006',
            transferInstructionAmount: 1000000000.00,
            transferProgress: '待处理',
            tradeOrders: [
              {
                id: '2-1-2-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '22222222222222222223',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00006',
                tradeVariety: '地方政府债',
                bondName: '广东省政府债',
                settlementDate: '2025-03-02',
                settlementMethod: '券款对付',
                settlementAmount: 1200000.00,
                purpose: '资产调整'
              },
              {
                id: '2-1-2-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '22222222222222222224',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00006',
                tradeVariety: '地方政府债',
                bondName: '上海市政府债',
                settlementDate: '2025-03-02',
                settlementMethod: '券款对付',
                settlementAmount: 1100000.00,
                purpose: '资产调整'
              }
            ]
          }
        ]
      },
      {
        id: '2-2',
        autoClearingStatus: '未开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '进行中',
        custodyProgress: '进行中',
        custodyInstitution: '工商银行上海分行',
        accountBalance: 1500000000.00,
        effectiveSettlementBalance: 1500000.00,
        generatedTransferAmount: 1500000.00,
        ungeneratedTransferAmount: 1500000.00,
        transferInstructions: [
          {
            id: '2-2-1',
            transferInstructionNumber: '000000000000000007',
            transferInstructionAmount: 750000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '2-2-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '22222222222222222225',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00003',
                tradeVariety: '14天正回购',
                bondName: '--',
                settlementDate: '2025-03-02',
                settlementMethod: '券款对付',
                settlementAmount: 1000000.00,
                purpose: '资金融通'
              },
              {
                id: '2-2-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '22222222222222222226',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00003',
                tradeVariety: '21天正回购',
                bondName: '--',
                settlementDate: '2025-03-02',
                settlementMethod: '券款对付',
                settlementAmount: 1200000.00,
                purpose: '资金融通'
              }
            ]
          },
          {
            id: '2-2-2',
            transferInstructionNumber: '000000000000000008',
            transferInstructionAmount: 750000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '2-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '22222222222222222227',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00007',
                tradeVariety: '同业存单',
                bondName: '某银行同业存单',
                settlementDate: '2025-03-02',
                settlementMethod: '券款对付',
                settlementAmount: 800000.00,
                purpose: '流动性投资'
              },
              {
                id: '2-2-2-2',
                instructionStatus: '未生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '22222222222222222228',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00007',
                tradeVariety: '同业存单',
                bondName: '另一银行同业存单',
                settlementDate: '2025-03-02',
                settlementMethod: '券款对付',
                settlementAmount: 900000.00,
                purpose: '流动性投资'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '3',
    fundCode: '000003',
    fundName: '稳健债券基金',
    ossBankBalance: 3.00,
    endDayBankDeposit: 3000000.00,
    endDayBankDepositWithInquiry: 3000000.00,
    custodyBank: '020-11223344',
    trader1: '陈七七',
    trader2: '刘八八',
    requiredTransferAmount: 3000000.00,
    custodyInstitutions: [
      {
        id: '3-1',
        autoClearingStatus: '未开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '进行中',
        custodyProgress: '进行中',
        custodyInstitution: '建设银行北京分行',
        accountBalance: 3000000000.00,
        effectiveSettlementBalance: 3000000.00,
        generatedTransferAmount: 3000000.00,
        ungeneratedTransferAmount: 3000000.00,
        transferInstructions: [
          {
            id: '3-1-1',
            transferInstructionNumber: '000000000000000009',
            transferInstructionAmount: 1500000000.00,
            transferProgress: '待处理',
            tradeOrders: [
              {
                id: '3-1-1-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '33333333333333333331',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00001',
                tradeVariety: '国债现券',
                bondName: '10年期国债',
                settlementDate: '2025-03-03',
                settlementMethod: '券款对付',
                settlementAmount: 1500000.00,
                purpose: '资产配置'
              },
              {
                id: '3-1-1-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '33333333333333333332',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00001',
                tradeVariety: '国债现券',
                bondName: '30年期国债',
                settlementDate: '2025-03-03',
                settlementMethod: '券款对付',
                settlementAmount: 1800000.00,
                purpose: '资产配置'
              }
            ]
          },
          {
            id: '3-1-2',
            transferInstructionNumber: '000000000000000010',
            transferInstructionAmount: 1500000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '3-1-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '33333333333333333333',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00002',
                tradeVariety: '企业债现券',
                bondName: '5年期企业债',
                settlementDate: '2025-03-03',
                settlementMethod: '券款对付',
                settlementAmount: 1200000.00,
                purpose: '流动性管理'
              },
              {
                id: '3-1-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '33333333333333333334',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00002',
                tradeVariety: '企业债现券',
                bondName: '3年期企业债',
                settlementDate: '2025-03-03',
                settlementMethod: '券款对付',
                settlementAmount: 1000000.00,
                purpose: '流动性管理'
              }
            ]
          }
        ]
      },
      {
        id: '3-2',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '未生成',
        pendingReminder: '已办',
        accountingProgress: '已完成',
        custodyProgress: '超时',
        custodyInstitution: '农业银行深圳分行',
        accountBalance: 2500000000.00,
        effectiveSettlementBalance: 2500000.00,
        generatedTransferAmount: 2500000.00,
        ungeneratedTransferAmount: 2500000.00,
        transferInstructions: [
          {
            id: '3-2-1',
            transferInstructionNumber: '000000000000000011',
            transferInstructionAmount: 1250000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '3-2-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '33333333333333333335',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00003',
                tradeVariety: '14天正回购',
                bondName: '--',
                settlementDate: '2025-03-03',
                settlementMethod: '券款对付',
                settlementAmount: 2000000.00,
                purpose: '资金融通'
              },
              {
                id: '3-2-1-2',
                instructionStatus: '未生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '33333333333333333336',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00003',
                tradeVariety: '28天正回购',
                bondName: '--',
                settlementDate: '2025-03-03',
                settlementMethod: '券款对付',
                settlementAmount: 1800000.00,
                purpose: '资金融通'
              }
            ]
          },
          {
            id: '3-2-2',
            transferInstructionNumber: '000000000000000012',
            transferInstructionAmount: 1250000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '3-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '33333333333333333337',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00008',
                tradeVariety: '金融债现券',
                bondName: '政策性银行债',
                settlementDate: '2025-03-03',
                settlementMethod: '券款对付',
                settlementAmount: 1600000.00,
                purpose: '资产配置'
              },
              {
                id: '3-2-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '33333333333333333338',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00008',
                tradeVariety: '金融债现券',
                bondName: '商业银行债',
                settlementDate: '2025-03-03',
                settlementMethod: '券款对付',
                settlementAmount: 1400000.00,
                purpose: '资产配置'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '4',
    fundCode: '000004',
    fundName: '成长股票基金',
    ossBankBalance: 4.00,
    endDayBankDeposit: 4000000.00,
    endDayBankDepositWithInquiry: 4000000.00,
    custodyBank: '020-55667788',
    trader1: '周九九',
    trader2: '吴十十',
    requiredTransferAmount: 4000000.00,
    custodyInstitutions: [
      {
        id: '4-1',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '已完成',
        custodyProgress: '进行中',
        custodyInstitution: '交通银行天津分行',
        accountBalance: 4000000000.00,
        effectiveSettlementBalance: 4000000.00,
        generatedTransferAmount: 4000000.00,
        ungeneratedTransferAmount: 4000000.00,
        transferInstructions: [
          {
            id: '4-1-1',
            transferInstructionNumber: '000000000000000013',
            transferInstructionAmount: 2000000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '4-1-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '44444444444444444441',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00001',
                tradeVariety: 'A股现货',
                bondName: '某科技股票',
                settlementDate: '2025-03-04',
                settlementMethod: '券款对付',
                settlementAmount: 2500000.00,
                purpose: '股票投资'
              },
              {
                id: '4-1-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '44444444444444444442',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00001',
                tradeVariety: 'A股现货',
                bondName: '某医药股票',
                settlementDate: '2025-03-04',
                settlementMethod: '券款对付',
                settlementAmount: 2200000.00,
                purpose: '股票投资'
              }
            ]
          },
          {
            id: '4-1-2',
            transferInstructionNumber: '000000000000000014',
            transferInstructionAmount: 2000000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '4-1-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '44444444444444444443',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00002',
                tradeVariety: 'A股现货',
                bondName: '某传统制造股票',
                settlementDate: '2025-03-04',
                settlementMethod: '券款对付',
                settlementAmount: 1800000.00,
                purpose: '资产调整'
              },
              {
                id: '4-1-2-2',
                instructionStatus: '未生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '44444444444444444444',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00002',
                tradeVariety: 'A股现货',
                bondName: '某房地产股票',
                settlementDate: '2025-03-04',
                settlementMethod: '券款对付',
                settlementAmount: 1600000.00,
                purpose: '资产调整'
              }
            ]
          }
        ]
      },
      {
        id: '4-2',
        autoClearingStatus: '未开启',
        transferApplicationStatus: '未生成',
        pendingReminder: '已办',
        accountingProgress: '超时',
        custodyProgress: '已完成',
        custodyInstitution: '民生银行杭州分行',
        accountBalance: 3500000000.00,
        effectiveSettlementBalance: 3500000.00,
        generatedTransferAmount: 3500000.00,
        ungeneratedTransferAmount: 3500000.00,
        transferInstructions: [
          {
            id: '4-2-1',
            transferInstructionNumber: '000000000000000015',
            transferInstructionAmount: 1750000000.00,
            transferProgress: '待处理',
            tradeOrders: [
              {
                id: '4-2-1-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '44444444444444444445',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00009',
                tradeVariety: '可转债',
                bondName: '某科技可转债',
                settlementDate: '2025-03-04',
                settlementMethod: '券款对付',
                settlementAmount: 2000000.00,
                purpose: '可转债投资'
              },
              {
                id: '4-2-1-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '44444444444444444446',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00009',
                tradeVariety: '可转债',
                bondName: '某银行可转债',
                settlementDate: '2025-03-04',
                settlementMethod: '券款对付',
                settlementAmount: 1900000.00,
                purpose: '可转债投资'
              }
            ]
          },
          {
            id: '4-2-2',
            transferInstructionNumber: '000000000000000016',
            transferInstructionAmount: 1750000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '4-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '44444444444444444447',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00004',
                tradeVariety: '7天正回购',
                bondName: '--',
                settlementDate: '2025-03-04',
                settlementMethod: '券款对付',
                settlementAmount: 1500000.00,
                purpose: '资金融通'
              },
              {
                id: '4-2-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '44444444444444444448',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00004',
                tradeVariety: '14天正回购',
                bondName: '--',
                settlementDate: '2025-03-04',
                settlementMethod: '券款对付',
                settlementAmount: 1700000.00,
                purpose: '资金融通'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '5',
    fundCode: '000005',
    fundName: '价值混合基金',
    ossBankBalance: 5.00,
    endDayBankDeposit: 5000000.00,
    endDayBankDepositWithInquiry: 5000000.00,
    custodyBank: '020-99887766',
    trader1: '郑一一',
    trader2: '孙二二',
    requiredTransferAmount: 5000000.00,
    custodyInstitutions: [
      {
        id: '5-1',
        autoClearingStatus: '已生成',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '进行中',
        custodyProgress: '进行中',
        custodyInstitution: '浦发银行成都分行',
        accountBalance: 5000000000.00,
        effectiveSettlementBalance: 5000000.00,
        generatedTransferAmount: 5000000.00,
        ungeneratedTransferAmount: 5000000.00,
        transferInstructions: [
          {
            id: '5-1-1',
            transferInstructionNumber: '000000000000000017',
            transferInstructionAmount: 2500000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '5-1-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '55555555555555555551',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00003',
                tradeVariety: 'A股现货',
                bondName: '某消费股票',
                settlementDate: '2025-03-05',
                settlementMethod: '券款对付',
                settlementAmount: 3000000.00,
                purpose: '股票投资'
              },
              {
                id: '5-1-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '55555555555555555552',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00003',
                tradeVariety: 'A股现货',
                bondName: '某金融股票',
                settlementDate: '2025-03-05',
                settlementMethod: '券款对付',
                settlementAmount: 2800000.00,
                purpose: '股票投资'
              }
            ]
          },
          {
            id: '5-1-2',
            transferInstructionNumber: '000000000000000018',
            transferInstructionAmount: 2500000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '5-1-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '55555555555555555553',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00010',
                tradeVariety: '国债现券',
                bondName: '20年期国债',
                settlementDate: '2025-03-05',
                settlementMethod: '券款对付',
                settlementAmount: 2500000.00,
                purpose: '资产配置'
              },
              {
                id: '5-1-2-2',
                instructionStatus: '未生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '55555555555555555554',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00010',
                tradeVariety: '国债现券',
                bondName: '15年期国债',
                settlementDate: '2025-03-05',
                settlementMethod: '券款对付',
                settlementAmount: 2300000.00,
                purpose: '资产配置'
              }
            ]
          }
        ]
      },
      {
        id: '5-2',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '未生成',
        pendingReminder: '已办',
        accountingProgress: '已完成',
        custodyProgress: '超时',
        custodyInstitution: '兴业银行武汉分行',
        accountBalance: 4500000000.00,
        effectiveSettlementBalance: 4500000.00,
        generatedTransferAmount: 4500000.00,
        ungeneratedTransferAmount: 4500000.00,
        transferInstructions: [
          {
            id: '5-2-1',
            transferInstructionNumber: '000000000000000019',
            transferInstructionAmount: 2250000000.00,
            transferProgress: '待处理',
            tradeOrders: [
              {
                id: '5-2-1-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '55555555555555555555',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00004',
                tradeVariety: 'A股现货',
                bondName: '某周期股票',
                settlementDate: '2025-03-05',
                settlementMethod: '券款对付',
                settlementAmount: 2100000.00,
                purpose: '资产调整'
              },
              {
                id: '5-2-1-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '55555555555555555556',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00004',
                tradeVariety: 'A股现货',
                bondName: '某能源股票',
                settlementDate: '2025-03-05',
                settlementMethod: '券款对付',
                settlementAmount: 1900000.00,
                purpose: '资产调整'
              }
            ]
          },
          {
            id: '5-2-2',
            transferInstructionNumber: '000000000000000020',
            transferInstructionAmount: 2250000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '5-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '55555555555555555557',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00011',
                tradeVariety: '企业债现券',
                bondName: '某制造业企业债',
                settlementDate: '2025-03-05',
                settlementMethod: '券款对付',
                settlementAmount: 2000000.00,
                purpose: '流动性管理'
              },
              {
                id: '5-2-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '55555555555555555558',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00011',
                tradeVariety: '企业债现券',
                bondName: '某服务业企业债',
                settlementDate: '2025-03-05',
                settlementMethod: '券款对付',
                settlementAmount: 1800000.00,
                purpose: '流动性管理'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '6',
    fundCode: '000006',
    fundName: '灵活配置基金',
    ossBankBalance: 6.00,
    endDayBankDeposit: 6000000.00,
    endDayBankDepositWithInquiry: 6000000.00,
    custodyBank: '020-33445566',
    trader1: '钱三三',
    trader2: '李四四',
    requiredTransferAmount: 6000000.00,
    custodyInstitutions: [
      {
        id: '6-1',
        autoClearingStatus: '未开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '已完成',
        custodyProgress: '进行中',
        custodyInstitution: '光大银行西安分行',
        accountBalance: 6000000000.00,
        effectiveSettlementBalance: 6000000.00,
        generatedTransferAmount: 6000000.00,
        ungeneratedTransferAmount: 6000000.00,
        transferInstructions: [
          {
            id: '6-1-1',
            transferInstructionNumber: '000000000000000021',
            transferInstructionAmount: 3000000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '6-1-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '66666666666666666661',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00012',
                tradeVariety: '地方政府债',
                bondName: '江苏省政府债',
                settlementDate: '2025-03-06',
                settlementMethod: '券款对付',
                settlementAmount: 3500000.00,
                purpose: '资产配置'
              },
              {
                id: '6-1-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '66666666666666666662',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00012',
                tradeVariety: '地方政府债',
                bondName: '浙江省政府债',
                settlementDate: '2025-03-06',
                settlementMethod: '券款对付',
                settlementAmount: 3200000.00,
                purpose: '资产配置'
              }
            ]
          },
          {
            id: '6-1-2',
            transferInstructionNumber: '000000000000000022',
            transferInstructionAmount: 3000000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '6-1-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '66666666666666666663',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00005',
                tradeVariety: 'A股现货',
                bondName: '某新能源股票',
                settlementDate: '2025-03-06',
                settlementMethod: '券款对付',
                settlementAmount: 2800000.00,
                purpose: '股票投资'
              },
              {
                id: '6-1-2-2',
                instructionStatus: '未生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '66666666666666666664',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00005',
                tradeVariety: 'A股现货',
                bondName: '某电子股票',
                settlementDate: '2025-03-06',
                settlementMethod: '券款对付',
                settlementAmount: 2600000.00,
                purpose: '股票投资'
              }
            ]
          }
        ]
      },
      {
        id: '6-2',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '已办',
        accountingProgress: '超时',
        custodyProgress: '已完成',
        custodyInstitution: '华夏银行南京分行',
        accountBalance: 5500000000.00,
        effectiveSettlementBalance: 5500000.00,
        generatedTransferAmount: 5500000.00,
        ungeneratedTransferAmount: 5500000.00,
        transferInstructions: [
          {
            id: '6-2-1',
            transferInstructionNumber: '000000000000000023',
            transferInstructionAmount: 2750000000.00,
            transferProgress: '待处理',
            tradeOrders: [
              {
                id: '6-2-1-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '66666666666666666665',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00005',
                tradeVariety: '30天正回购',
                bondName: '--',
                settlementDate: '2025-03-06',
                settlementMethod: '券款对付',
                settlementAmount: 2400000.00,
                purpose: '资金融通'
              },
              {
                id: '6-2-1-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '66666666666666666666',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00005',
                tradeVariety: '60天正回购',
                bondName: '--',
                settlementDate: '2025-03-06',
                settlementMethod: '券款对付',
                settlementAmount: 2200000.00,
                purpose: '资金融通'
              }
            ]
          },
          {
            id: '6-2-2',
            transferInstructionNumber: '000000000000000024',
            transferInstructionAmount: 2750000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '6-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '66666666666666666667',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00013',
                tradeVariety: '同业存单',
                bondName: '某股份制银行存单',
                settlementDate: '2025-03-06',
                settlementMethod: '券款对付',
                settlementAmount: 2100000.00,
                purpose: '流动性管理'
              },
              {
                id: '6-2-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '66666666666666666668',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00013',
                tradeVariety: '同业存单',
                bondName: '某城商行存单',
                settlementDate: '2025-03-06',
                settlementMethod: '券款对付',
                settlementAmount: 1900000.00,
                purpose: '流动性管理'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '7',
    fundCode: '000007',
    fundName: '科技创新基金',
    ossBankBalance: 7.00,
    endDayBankDeposit: 7000000.00,
    endDayBankDepositWithInquiry: 7000000.00,
    custodyBank: '020-77889900',
    trader1: '何五五',
    trader2: '沈六六',
    requiredTransferAmount: 7000000.00,
    custodyInstitutions: [
      {
        id: '7-1',
        autoClearingStatus: '已生成',
        transferApplicationStatus: '未生成',
        pendingReminder: '未办',
        accountingProgress: '进行中',
        custodyProgress: '进行中',
        custodyInstitution: '平安银行青岛分行',
        accountBalance: 7000000000.00,
        effectiveSettlementBalance: 7000000.00,
        generatedTransferAmount: 7000000.00,
        ungeneratedTransferAmount: 7000000.00,
        transferInstructions: [
          {
            id: '7-1-1',
            transferInstructionNumber: '000000000000000025',
            transferInstructionAmount: 3500000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '7-1-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '77777777777777777771',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00006',
                tradeVariety: 'A股现货',
                bondName: '某芯片股票',
                settlementDate: '2025-03-07',
                settlementMethod: '券款对付',
                settlementAmount: 4000000.00,
                purpose: '科技股投资'
              },
              {
                id: '7-1-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '77777777777777777772',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00006',
                tradeVariety: 'A股现货',
                bondName: '某人工智能股票',
                settlementDate: '2025-03-07',
                settlementMethod: '券款对付',
                settlementAmount: 3800000.00,
                purpose: '科技股投资'
              }
            ]
          },
          {
            id: '7-1-2',
            transferInstructionNumber: '000000000000000026',
            transferInstructionAmount: 3500000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '7-1-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '77777777777777777773',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00014',
                tradeVariety: '可转债',
                bondName: '某科技公司可转债',
                settlementDate: '2025-03-07',
                settlementMethod: '券款对付',
                settlementAmount: 3500000.00,
                purpose: '可转债投资'
              },
              {
                id: '7-1-2-2',
                instructionStatus: '未生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '77777777777777777774',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00014',
                tradeVariety: '可转债',
                bondName: '某新材料公司可转债',
                settlementDate: '2025-03-07',
                settlementMethod: '券款对付',
                settlementAmount: 3300000.00,
                purpose: '可转债投资'
              }
            ]
          }
        ]
      },
      {
        id: '7-2',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '已办',
        accountingProgress: '已完成',
        custodyProgress: '超时',
        custodyInstitution: '渤海银行大连分行',
        accountBalance: 6500000000.00,
        effectiveSettlementBalance: 6500000.00,
        generatedTransferAmount: 6500000.00,
        ungeneratedTransferAmount: 6500000.00,
        transferInstructions: [
          {
            id: '7-2-1',
            transferInstructionNumber: '000000000000000027',
            transferInstructionAmount: 3250000000.00,
            transferProgress: '待处理',
            tradeOrders: [
              {
                id: '7-2-1-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '77777777777777777775',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00007',
                tradeVariety: 'A股现货',
                bondName: '某传统科技股票',
                settlementDate: '2025-03-07',
                settlementMethod: '券款对付',
                settlementAmount: 2900000.00,
                purpose: '资产调整'
              },
              {
                id: '7-2-1-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '77777777777777777776',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00007',
                tradeVariety: 'A股现货',
                bondName: '某软件股票',
                settlementDate: '2025-03-07',
                settlementMethod: '券款对付',
                settlementAmount: 2700000.00,
                purpose: '资产调整'
              }
            ]
          },
          {
            id: '7-2-2',
            transferInstructionNumber: '000000000000000028',
            transferInstructionAmount: 3250000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '7-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '77777777777777777777',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00006',
                tradeVariety: '91天正回购',
                bondName: '--',
                settlementDate: '2025-03-07',
                settlementMethod: '券款对付',
                settlementAmount: 2800000.00,
                purpose: '资金融通'
              },
              {
                id: '7-2-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '77777777777777777778',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00006',
                tradeVariety: '182天正回购',
                bondName: '--',
                settlementDate: '2025-03-07',
                settlementMethod: '券款对付',
                settlementAmount: 2600000.00,
                purpose: '资金融通'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '8',
    fundCode: '000008',
    fundName: '医疗健康基金',
    ossBankBalance: 8.00,
    endDayBankDeposit: 8000000.00,
    endDayBankDepositWithInquiry: 8000000.00,
    custodyBank: '020-11223344',
    trader1: '冯七七',
    trader2: '卫八八',
    requiredTransferAmount: 8000000.00,
    custodyInstitutions: [
      {
        id: '8-1',
        autoClearingStatus: '未开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '已完成',
        custodyProgress: '进行中',
        custodyInstitution: '恒丰银行烟台分行',
        accountBalance: 8000000000.00,
        effectiveSettlementBalance: 8000000.00,
        generatedTransferAmount: 8000000.00,
        ungeneratedTransferAmount: 8000000.00,
        transferInstructions: [
          {
            id: '8-1-1',
            transferInstructionNumber: '000000000000000029',
            transferInstructionAmount: 4000000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '8-1-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '88888888888888888881',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00008',
                tradeVariety: 'A股现货',
                bondName: '某制药股票',
                settlementDate: '2025-03-08',
                settlementMethod: '券款对付',
                settlementAmount: 4500000.00,
                purpose: '医药股投资'
              },
              {
                id: '8-1-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '88888888888888888882',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00008',
                tradeVariety: 'A股现货',
                bondName: '某医疗器械股票',
                settlementDate: '2025-03-08',
                settlementMethod: '券款对付',
                settlementAmount: 4200000.00,
                purpose: '医药股投资'
              }
            ]
          },
          {
            id: '8-1-2',
            transferInstructionNumber: '000000000000000030',
            transferInstructionAmount: 4000000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '8-1-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '88888888888888888883',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00015',
                tradeVariety: '企业债现券',
                bondName: '某医药企业债',
                settlementDate: '2025-03-08',
                settlementMethod: '券款对付',
                settlementAmount: 3800000.00,
                purpose: '医药行业债券投资'
              },
              {
                id: '8-1-2-2',
                instructionStatus: '未生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '88888888888888888884',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00015',
                tradeVariety: '企业债现券',
                bondName: '某生物科技企业债',
                settlementDate: '2025-03-08',
                settlementMethod: '券款对付',
                settlementAmount: 3600000.00,
                purpose: '医药行业债券投资'
              }
            ]
          }
        ]
      },
      {
        id: '8-2',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '未生成',
        pendingReminder: '已办',
        accountingProgress: '超时',
        custodyProgress: '已完成',
        custodyInstitution: '广发银行佛山分行',
        accountBalance: 7500000000.00,
        effectiveSettlementBalance: 7500000.00,
        generatedTransferAmount: 7500000.00,
        ungeneratedTransferAmount: 7500000.00,
        transferInstructions: [
          {
            id: '8-2-1',
            transferInstructionNumber: '000000000000000031',
            transferInstructionAmount: 3750000000.00,
            transferProgress: '待处理',
            tradeOrders: [
              {
                id: '8-2-1-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '88888888888888888885',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00009',
                tradeVariety: 'A股现货',
                bondName: '某传统医药股票',
                settlementDate: '2025-03-08',
                settlementMethod: '券款对付',
                settlementAmount: 3300000.00,
                purpose: '资产调整'
              },
              {
                id: '8-2-1-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '88888888888888888886',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00009',
                tradeVariety: 'A股现货',
                bondName: '某医疗服务股票',
                settlementDate: '2025-03-08',
                settlementMethod: '券款对付',
                settlementAmount: 3100000.00,
                purpose: '资产调整'
              }
            ]
          },
          {
            id: '8-2-2',
            transferInstructionNumber: '000000000000000032',
            transferInstructionAmount: 3750000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '8-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '88888888888888888887',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00016',
                tradeVariety: '可转债',
                bondName: '某医药可转债',
                settlementDate: '2025-03-08',
                settlementMethod: '券款对付',
                settlementAmount: 3200000.00,
                purpose: '可转债调整'
              },
              {
                id: '8-2-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '88888888888888888888',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00016',
                tradeVariety: '可转债',
                bondName: '某生物医药可转债',
                settlementDate: '2025-03-08',
                settlementMethod: '券款对付',
                settlementAmount: 3000000.00,
                purpose: '可转债调整'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '9',
    fundCode: '000009',
    fundName: '消费升级基金',
    ossBankBalance: 9.00,
    endDayBankDeposit: 9000000.00,
    endDayBankDepositWithInquiry: 9000000.00,
    custodyBank: '020-55667788',
    trader1: '蒋九九',
    trader2: '韩十十',
    requiredTransferAmount: 9000000.00,
    custodyInstitutions: [
      {
        id: '9-1',
        autoClearingStatus: '已生成',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '进行中',
        custodyProgress: '进行中',
        custodyInstitution: '中原银行郑州分行',
        accountBalance: 9000000000.00,
        effectiveSettlementBalance: 9000000.00,
        generatedTransferAmount: 9000000.00,
        ungeneratedTransferAmount: 9000000.00,
        transferInstructions: [
          {
            id: '9-1-1',
            transferInstructionNumber: '000000000000000033',
            transferInstructionAmount: 4500000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '9-1-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '99999999999999999991',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00010',
                tradeVariety: 'A股现货',
                bondName: '某白酒股票',
                settlementDate: '2025-03-09',
                settlementMethod: '券款对付',
                settlementAmount: 5000000.00,
                purpose: '消费股投资'
              },
              {
                id: '9-1-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '99999999999999999992',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00010',
                tradeVariety: 'A股现货',
                bondName: '某家电股票',
                settlementDate: '2025-03-09',
                settlementMethod: '券款对付',
                settlementAmount: 4700000.00,
                purpose: '消费股投资'
              }
            ]
          },
          {
            id: '9-1-2',
            transferInstructionNumber: '000000000000000034',
            transferInstructionAmount: 4500000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '9-1-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '99999999999999999993',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00017',
                tradeVariety: '企业债现券',
                bondName: '某消费企业债',
                settlementDate: '2025-03-09',
                settlementMethod: '券款对付',
                settlementAmount: 4300000.00,
                purpose: '消费行业债券投资'
              },
              {
                id: '9-1-2-2',
                instructionStatus: '未生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '99999999999999999994',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00017',
                tradeVariety: '企业债现券',
                bondName: '某零售企业债',
                settlementDate: '2025-03-09',
                settlementMethod: '券款对付',
                settlementAmount: 4100000.00,
                purpose: '消费行业债券投资'
              }
            ]
          }
        ]
      },
      {
        id: '9-2',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '未生成',
        pendingReminder: '已办',
        accountingProgress: '已完成',
        custodyProgress: '超时',
        custodyInstitution: '江苏银行苏州分行',
        accountBalance: 8500000000.00,
        effectiveSettlementBalance: 8500000.00,
        generatedTransferAmount: 8500000.00,
        ungeneratedTransferAmount: 8500000.00,
        transferInstructions: [
          {
            id: '9-2-1',
            transferInstructionNumber: '000000000000000035',
            transferInstructionAmount: 4250000000.00,
            transferProgress: '待处理',
            tradeOrders: [
              {
                id: '9-2-1-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '99999999999999999995',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00011',
                tradeVariety: 'A股现货',
                bondName: '某传统消费股票',
                settlementDate: '2025-03-09',
                settlementMethod: '券款对付',
                settlementAmount: 3800000.00,
                purpose: '资产调整'
              },
              {
                id: '9-2-1-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '99999999999999999996',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00011',
                tradeVariety: 'A股现货',
                bondName: '某纺织股票',
                settlementDate: '2025-03-09',
                settlementMethod: '券款对付',
                settlementAmount: 3600000.00,
                purpose: '资产调整'
              }
            ]
          },
          {
            id: '9-2-2',
            transferInstructionNumber: '000000000000000036',
            transferInstructionAmount: 4250000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '9-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '99999999999999999997',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00007',
                tradeVariety: '273天正回购',
                bondName: '--',
                settlementDate: '2025-03-09',
                settlementMethod: '券款对付',
                settlementAmount: 3700000.00,
                purpose: '资金融通'
              },
              {
                id: '9-2-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '99999999999999999998',
                tradeType: '融资回购',
                tradeVarietyCode: 'R00007',
                tradeVariety: '365天正回购',
                bondName: '--',
                settlementDate: '2025-03-09',
                settlementMethod: '券款对付',
                settlementAmount: 3500000.00,
                purpose: '资金融通'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '10',
    fundCode: '000010',
    fundName: '新兴产业基金',
    ossBankBalance: 10.00,
    endDayBankDeposit: 10000000.00,
    endDayBankDepositWithInquiry: 10000000.00,
    custodyBank: '020-99887766',
    trader1: '杨一一',
    trader2: '朱二二',
    requiredTransferAmount: 10000000.00,
    custodyInstitutions: [
      {
        id: '10-1',
        autoClearingStatus: '未开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '未办',
        accountingProgress: '已完成',
        custodyProgress: '进行中',
        custodyInstitution: '北京银行石家庄分行',
        accountBalance: 10000000000.00,
        effectiveSettlementBalance: 10000000.00,
        generatedTransferAmount: 10000000.00,
        ungeneratedTransferAmount: 10000000.00,
        transferInstructions: [
          {
            id: '10-1-1',
            transferInstructionNumber: '000000000000000037',
            transferInstructionAmount: 5000000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '10-1-1-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '10101010101010101001',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00012',
                tradeVariety: 'A股现货',
                bondName: '某新能源汽车股票',
                settlementDate: '2025-03-10',
                settlementMethod: '券款对付',
                settlementAmount: 5500000.00,
                purpose: '新兴产业投资'
              },
              {
                id: '10-1-1-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '10101010101010101002',
                tradeType: '股票买入',
                tradeVarietyCode: 'S00012',
                tradeVariety: 'A股现货',
                bondName: '某5G通信股票',
                settlementDate: '2025-03-10',
                settlementMethod: '券款对付',
                settlementAmount: 5200000.00,
                purpose: '新兴产业投资'
              }
            ]
          },
          {
            id: '10-1-2',
            transferInstructionNumber: '000000000000000038',
            transferInstructionAmount: 5000000000.00,
            transferProgress: '进行中',
            tradeOrders: [
              {
                id: '10-1-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '10101010101010101003',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00018',
                tradeVariety: '可转债',
                bondName: '某新能源可转债',
                settlementDate: '2025-03-10',
                settlementMethod: '券款对付',
                settlementAmount: 4800000.00,
                purpose: '新兴产业可转债投资'
              },
              {
                id: '10-1-2-2',
                instructionStatus: '未生成',
                validStatus: '异常',
                fundSettlementStatus: '失败',
                tradeOrderNumber: '10101010101010101004',
                tradeType: '现券买入',
                tradeVarietyCode: 'C00018',
                tradeVariety: '可转债',
                bondName: '某环保可转债',
                settlementDate: '2025-03-10',
                settlementMethod: '券款对付',
                settlementAmount: 4600000.00,
                purpose: '新兴产业可转债投资'
              }
            ]
          }
        ]
      },
      {
        id: '10-2',
        autoClearingStatus: '已开启',
        transferApplicationStatus: '已生成',
        pendingReminder: '已办',
        accountingProgress: '超时',
        custodyProgress: '已完成',
        custodyInstitution: '上海银行无锡分行',
        accountBalance: 9500000000.00,
        effectiveSettlementBalance: 9500000.00,
        generatedTransferAmount: 9500000.00,
        ungeneratedTransferAmount: 9500000.00,
        transferInstructions: [
          {
            id: '10-2-1',
            transferInstructionNumber: '000000000000000039',
            transferInstructionAmount: 4750000000.00,
            transferProgress: '待处理',
            tradeOrders: [
              {
                id: '10-2-1-1',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '10101010101010101005',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00013',
                tradeVariety: 'A股现货',
                bondName: '某传统能源股票',
                settlementDate: '2025-03-10',
                settlementMethod: '券款对付',
                settlementAmount: 4200000.00,
                purpose: '资产调整'
              },
              {
                id: '10-2-1-2',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '10101010101010101006',
                tradeType: '股票卖出',
                tradeVarietyCode: 'S00013',
                tradeVariety: 'A股现货',
                bondName: '某钢铁股票',
                settlementDate: '2025-03-10',
                settlementMethod: '券款对付',
                settlementAmount: 4000000.00,
                purpose: '资产调整'
              }
            ]
          },
          {
            id: '10-2-2',
            transferInstructionNumber: '000000000000000040',
            transferInstructionAmount: 4750000000.00,
            transferProgress: '已完成',
            tradeOrders: [
              {
                id: '10-2-2-1',
                instructionStatus: '已生成',
                validStatus: '正常',
                fundSettlementStatus: '成功',
                tradeOrderNumber: '10101010101010101007',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00019',
                tradeVariety: '企业债现券',
                bondName: '某传统制造业企业债',
                settlementDate: '2025-03-10',
                settlementMethod: '券款对付',
                settlementAmount: 4100000.00,
                purpose: '债券调整'
              },
              {
                id: '10-2-2-2',
                instructionStatus: '未生成',
                validStatus: '正常',
                fundSettlementStatus: '处理中',
                tradeOrderNumber: '10101010101010101008',
                tradeType: '现券卖出',
                tradeVarietyCode: 'C00019',
                tradeVariety: '企业债现券',
                bondName: '某化工企业债',
                settlementDate: '2025-03-10',
                settlementMethod: '券款对付',
                settlementAmount: 3900000.00,
                purpose: '债券调整'
              }
            ]
          }
        ]
      }
    ]
  }
];