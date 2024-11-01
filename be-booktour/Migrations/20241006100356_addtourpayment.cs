using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class addtourpayment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { "3d6c3062-c44d-42f7-829d-722bb263dae1", null, "Admin", "ADMIN" },
                    { "654dd081-52a3-4de7-aa8f-ce1385260bef", null, "FlightManager", "FLIGHTMANAGER" },
                    { "8726aaf7-86ee-419a-af41-dcfbca26354c", null, "TourManager", "TOURMANAGER" },
                    { "90772dec-2fce-4e30-bbe0-26d45232753e", null, "Customer", "CUSTOMER" },
                    { "b3511f11-d77c-4428-9623-442f59f4f473", null, "HotelManager", "HOTELMANAGER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3d6c3062-c44d-42f7-829d-722bb263dae1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "654dd081-52a3-4de7-aa8f-ce1385260bef");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8726aaf7-86ee-419a-af41-dcfbca26354c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "90772dec-2fce-4e30-bbe0-26d45232753e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b3511f11-d77c-4428-9623-442f59f4f473");

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
    }
}
