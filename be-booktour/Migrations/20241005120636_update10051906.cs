using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class update10051906 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { "5ae2f602-515b-4814-aafa-e57e16a3962b", null, "TourManager", "Tour Manager" },
                    { "6218caa1-12da-40ed-846e-4a614d3b0a8d", null, "Admin", "Admin" },
                    { "a9983165-ba18-4f22-b561-dc05e91c8951", null, "HotelManager", "Hotel Manager" },
                    { "c4b5a39c-2b4e-472c-afa7-fdc7424e9c90", null, "Customer", "Customer" },
                    { "fcb396c5-0857-4cd1-be73-1dcc20f9f2a9", null, "FlightManager", "Flight Manager" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5ae2f602-515b-4814-aafa-e57e16a3962b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6218caa1-12da-40ed-846e-4a614d3b0a8d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a9983165-ba18-4f22-b561-dc05e91c8951");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c4b5a39c-2b4e-472c-afa7-fdc7424e9c90");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fcb396c5-0857-4cd1-be73-1dcc20f9f2a9");

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
    }
}
