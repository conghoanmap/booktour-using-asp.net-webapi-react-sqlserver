export const formatPrice = (price) => {
  if (isNaN(price)) return "";

  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ";
};

export default formatPrice;
