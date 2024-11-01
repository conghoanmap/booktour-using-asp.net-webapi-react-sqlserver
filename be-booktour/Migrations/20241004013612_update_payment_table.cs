using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class update_payment_table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "35ba8c54-8bd6-4974-a6b7-2114ec1d3cbe");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "576602e3-9463-4b66-bcec-8c0098b212dc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7dff28e3-12b0-4472-9c37-0a3b2d5cc951");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "eb205a19-7941-499a-9b7b-98940b7eb952");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fd793067-47e2-4919-a6fb-68a19edd251a");

            migrationBuilder.RenameColumn(
                name: "TotalPrice",
                table: "Payments",
                newName: "UnPaidAmount");

            migrationBuilder.AddColumn<decimal>(
                name: "PaidAmount",
                table: "Payments",
                type: "decimal(18,0)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "669b9963-48f7-42c2-83c1-a04b778403ef", null, "Admin", "Admin" },
                    { "7c5f04cc-2b6c-4055-904b-724eaa02a6fd", null, "Customer", "Customer" },
                    { "92d76d2c-af44-4eac-958c-4cc226716a79", null, "HotelManager", "Hotel Manager" },
                    { "9b6a835f-931f-423f-8b40-b53a6cb2952c", null, "TourManager", "Tour Manager" },
                    { "b0cdabbd-0733-4d53-87d3-228a093c447e", null, "FlightManager", "Flight Manager" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "669b9963-48f7-42c2-83c1-a04b778403ef");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7c5f04cc-2b6c-4055-904b-724eaa02a6fd");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "92d76d2c-af44-4eac-958c-4cc226716a79");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9b6a835f-931f-423f-8b40-b53a6cb2952c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b0cdabbd-0733-4d53-87d3-228a093c447e");

            migrationBuilder.DropColumn(
                name: "PaidAmount",
                table: "Payments");

            migrationBuilder.RenameColumn(
                name: "UnPaidAmount",
                table: "Payments",
                newName: "TotalPrice");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "35ba8c54-8bd6-4974-a6b7-2114ec1d3cbe", null, "FlightManager", "Flight Manager" },
                    { "576602e3-9463-4b66-bcec-8c0098b212dc", null, "TourManager", "Tour Manager" },
                    { "7dff28e3-12b0-4472-9c37-0a3b2d5cc951", null, "Customer", "Customer" },
                    { "eb205a19-7941-499a-9b7b-98940b7eb952", null, "HotelManager", "Hotel Manager" },
                    { "fd793067-47e2-4919-a6fb-68a19edd251a", null, "Admin", "Admin" }
                });
        }
    }
}
