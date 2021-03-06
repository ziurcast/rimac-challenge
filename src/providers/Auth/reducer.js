import {
  CUSTOMER_DATA,
  CAR_DATA,
  PLAN_DATA,
  VERIFIED,
  CURRENT_STEP,
  RESET_DATA,
} from './actions';

function AuthReducer(state, action) {
  switch (action.type) {
    case CUSTOMER_DATA:
      return {
        customerData: {
          ...action.payload,
        },
      };
    case CAR_DATA:
      return {
        ...state,
        carData: {
          ...action.payload,
        },
      };
    case PLAN_DATA:
      return {
        ...state,
        planData: {
          ...action.payload,
        },
      };
    case VERIFIED:
      return {
        ...state,
        isVerified: action.payload,
      };
    case CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case RESET_DATA:
      return {
        email: state.customerData.email,
        isVerified: false,
      };
    default:
      throw new Error();
  }
}

export default AuthReducer;
