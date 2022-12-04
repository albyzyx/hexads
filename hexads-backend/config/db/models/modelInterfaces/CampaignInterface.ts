// Ad campaign data model, Contains campaign price and progress
const CampaignInterface = {
  campaignID: {
    type: Number,
    required: true,
    unique: true,
  },
  campaignName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  bannerURL: {
    type: [String],
    required: true,
  },
  targetAudience: {
    type: [Number],
  },
  campaignBudgetXAT: {
    type: Number,
    required: true,
  },
  campaignSpentXAT: {
    type: Number,
    required: true,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  advertizerAddress: {
    type: String,
  },
};

export default CampaignInterface;
