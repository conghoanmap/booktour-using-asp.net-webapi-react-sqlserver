using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class dbset : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "139e34b9-bf38-4516-a20d-e717216e02cc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4ec3f878-2ea0-4b1a-94b2-e234878777e2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "80773128-d062-4c10-8bf5-c280392b29ef");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84184735-2a6e-480c-864c-e4df2e8e6410");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a4cf1df9-4600-49b0-98da-26c4b6a5c41c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3ebdddc1-d17a-403a-8954-aec73934605b", null, "HotelManager", "Hotel Manager" },
                    { "458e95f1-9ea6-41fb-a1d0-dcaf6a4fa890", null, "Customer", "Customer" },
                    { "93a0f126-88f5-465f-808c-4113194b0931", null, "TourManager", "Tour Manager" },
                    { "a68b42c3-5d7a-4a55-a24a-7998485a416b", null, "FlightManager", "Flight Manager" },
                    { "b52b009c-d848-4919-b4a4-4e3c1c6646b7", null, "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3ebdddc1-d17a-403a-8954-aec73934605b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "458e95f1-9ea6-41fb-a1d0-dcaf6a4fa890");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "93a0f126-88f5-465f-808c-4113194b0931");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a68b42c3-5d7a-4a55-a24a-7998485a416b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b52b009c-d848-4919-b4a4-4e3c1c6646b7");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "139e34b9-bf38-4516-a20d-e717216e02cc", null, "Customer", "Customer" },
                    { "4ec3f878-2ea0-4b1a-94b2-e234878777e2", null, "Admin", "Admin" },
                    { "80773128-d062-4c10-8bf5-c280392b29ef", null, "FlightManager", "Flight Manager" },
                    { "84184735-2a6e-480c-864c-e4df2e8e6410", null, "TourManager", "Tour Manager" },
                    { "a4cf1df9-4600-49b0-98da-26c4b6a5c41c", null, "HotelManager", "Hotel Manager" }
                });
        }
    }
}
