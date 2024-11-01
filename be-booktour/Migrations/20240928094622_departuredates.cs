using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class departuredates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73377cbb-244f-4885-bdb7-849da7976809");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c8ed4330-ee23-412e-baad-cf2e91a9d12f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "de275bd4-5492-4824-a073-a5b3be1f7076");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fe4b46c2-f32e-44e1-a9a4-250edffda848");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ffacec4f-a6fb-4d7c-bb8b-92fff8fb0c0f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5be74960-4e22-4d0f-8faa-fd9598bf63e0", null, "Customer", "Customer" },
                    { "71fe7a39-f710-40e2-943f-bd284f7fceb1", null, "Admin", "Admin" },
                    { "d61d9f20-a228-43b9-892c-956ed20b0c59", null, "FlightManager", "Flight Manager" },
                    { "da5e1f98-693b-431a-8ed7-f4ea0e5491ab", null, "TourManager", "Tour Manager" },
                    { "edb0c7f7-c8d2-4984-b293-ab6cd94c0b8e", null, "HotelManager", "Hotel Manager" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5be74960-4e22-4d0f-8faa-fd9598bf63e0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "71fe7a39-f710-40e2-943f-bd284f7fceb1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d61d9f20-a228-43b9-892c-956ed20b0c59");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "da5e1f98-693b-431a-8ed7-f4ea0e5491ab");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "edb0c7f7-c8d2-4984-b293-ab6cd94c0b8e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "73377cbb-244f-4885-bdb7-849da7976809", null, "TourManager", "Tour Manager" },
                    { "c8ed4330-ee23-412e-baad-cf2e91a9d12f", null, "Customer", "Customer" },
                    { "de275bd4-5492-4824-a073-a5b3be1f7076", null, "Admin", "Admin" },
                    { "fe4b46c2-f32e-44e1-a9a4-250edffda848", null, "HotelManager", "Hotel Manager" },
                    { "ffacec4f-a6fb-4d7c-bb8b-92fff8fb0c0f", null, "FlightManager", "Flight Manager" }
                });
        }
    }
}
