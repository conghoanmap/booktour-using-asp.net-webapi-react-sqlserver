using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class finished : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "Finished",
                table: "Tours",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4150e23d-535f-4a2b-b6db-b9c1e857ea15", null, "TourManager", "Tour Manager" },
                    { "54ba6afb-490f-4e91-8efb-330a6a7c3198", null, "HotelManager", "Hotel Manager" },
                    { "a78d722d-600e-4dfe-8c2b-a1c029744dc6", null, "Customer", "Customer" },
                    { "b5914e31-6efd-48f9-b168-26961fbfbd5d", null, "FlightManager", "Flight Manager" },
                    { "e09bd6e0-502c-4d76-8df2-0e2764cac766", null, "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4150e23d-535f-4a2b-b6db-b9c1e857ea15");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "54ba6afb-490f-4e91-8efb-330a6a7c3198");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a78d722d-600e-4dfe-8c2b-a1c029744dc6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b5914e31-6efd-48f9-b168-26961fbfbd5d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e09bd6e0-502c-4d76-8df2-0e2764cac766");

            migrationBuilder.DropColumn(
                name: "Finished",
                table: "Tours");

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
    }
}
