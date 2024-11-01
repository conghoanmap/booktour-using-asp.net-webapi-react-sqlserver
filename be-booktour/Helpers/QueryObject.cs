namespace be_booktour.Helpers
{
    public class QueryObject
    {
        // public int? CategoryId { get; set; } = null;
        // public string? ProductName { get; set; } = null;
        // public string? SortBy { get; set; } = null; // Sắp xếp theo cột
        // public bool IsDecsending { get; set; } = false; // Giảm dần
        // public int PageNumber { get; set; } = 1; // Trang hiện tại
        // public int PageSize { get; set; } = 1; // Số lượng phần tử trên mỗi trang
        public string TourName { get; set; } = "";
        public int DepartureId { get; set; } = 0;
        public int DestinationId { get; set; } = 0;
        public decimal MinPrice { get; set; } = 0;
        public decimal MaxPrice { get; set; } = 999999999;
        public DateTime DepartureDay { get; set; } = new DateTime();
        public string Vehicle { get; set; } = "";
        public string SortBy { get; set; } = "Price"; // Sắp xếp theo cột
        public bool IsDecsending { get; set; } = false; // Giảm dần
        public int PageNumber { get; set; } = 1; // Trang hiện tại
        public int PageSize { get; set; } = 5; // Số lượng phần tử trên mỗi trang
    }
}