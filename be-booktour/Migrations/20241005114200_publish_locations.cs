using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class publish_locations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1526f612-51ce-4577-bd94-f6dd893bd076", null, "TourManager", "Tour Manager" },
                    { "5eef4faa-3a06-4680-9e4c-5d5d4a8f80fe", null, "Customer", "Customer" },
                    { "755611ec-d32d-40d6-a656-d995ede9654a", null, "HotelManager", "Hotel Manager" },
                    { "8854e230-0c21-4222-a7d1-d162e1aa15e8", null, "Admin", "Admin" },
                    { "964689de-13c5-4746-b983-f7bbb04bed4c", null, "FlightManager", "Flight Manager" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1526f612-51ce-4577-bd94-f6dd893bd076");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5eef4faa-3a06-4680-9e4c-5d5d4a8f80fe");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "755611ec-d32d-40d6-a656-d995ede9654a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8854e230-0c21-4222-a7d1-d162e1aa15e8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "964689de-13c5-4746-b983-f7bbb04bed4c");

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
    }
}
