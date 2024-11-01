using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class itinerary : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0fcdd44d-6691-4894-99cc-48c193474c74");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "228dee0a-c404-4a3f-9455-92d8c48bfba3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2eb86edf-3d3e-451a-b1f5-06c77525b827");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3e1e1c16-3c6e-49c5-8db9-50ef9afda5f3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cbba4c1e-10dd-4d13-8b86-e94dc0e36923");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1d2922ad-8a6d-45c6-9515-5951852ddcb1", null, "FlightManager", "Flight Manager" },
                    { "8e1905be-b001-4cf2-85e5-dce7ece5e5bc", null, "Admin", "Admin" },
                    { "96f2d9ba-b342-45d1-bfde-8665201b90b1", null, "Customer", "Customer" },
                    { "b159f08c-9baa-465e-9935-adeb3852c09f", null, "HotelManager", "Hotel Manager" },
                    { "f0d723fa-4394-475b-935d-30d06fe97531", null, "TourManager", "Tour Manager" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1d2922ad-8a6d-45c6-9515-5951852ddcb1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8e1905be-b001-4cf2-85e5-dce7ece5e5bc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "96f2d9ba-b342-45d1-bfde-8665201b90b1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b159f08c-9baa-465e-9935-adeb3852c09f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f0d723fa-4394-475b-935d-30d06fe97531");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0fcdd44d-6691-4894-99cc-48c193474c74", null, "Customer", "Customer" },
                    { "228dee0a-c404-4a3f-9455-92d8c48bfba3", null, "HotelManager", "Hotel Manager" },
                    { "2eb86edf-3d3e-451a-b1f5-06c77525b827", null, "TourManager", "Tour Manager" },
                    { "3e1e1c16-3c6e-49c5-8db9-50ef9afda5f3", null, "FlightManager", "Flight Manager" },
                    { "cbba4c1e-10dd-4d13-8b86-e94dc0e36923", null, "Admin", "Admin" }
                });
        }
    }
}
