// Ad campaign data model, Contains campaign price and progress
const InteractionInterface = {
  campaignAddress: {
    type: String,
    required: true,
  },
  platformAddress: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
  interactionType: {
    type: Number,
  },
  interactionCostXAT: {
    type: Number,
  },
};

export default InteractionInterface;
