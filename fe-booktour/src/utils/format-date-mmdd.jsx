const formatDateMMDD = (dateString) => {
    // Chuyển đổi chuỗi ngày thành một đối tượng Date
    const date = new Date(dateString);
  
    // Lấy tháng và ngày
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const day = String(date.getDate()).padStart(2, '0');        // Lấy ngày
  
    // Format thành MM/DD
    return `${month}/${day}`;
  };
  
  export default formatDateMMDD;
  