using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class AddLinhTinh : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4b1fab1f-9427-43e8-9675-a3cb389eb73f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "87ef9693-905f-468d-8e46-3cfbc8535f5c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "af9fd7f9-5f2b-4745-814c-415931a3e3e0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ed5a1c5f-e95a-41c7-8321-89afd0884f2b");

            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "222f5fc2-ec88-477f-99bd-7ae6e2a83dbe", null, "TourManager", "Tour Manager" },
                    { "2313e98b-61aa-4f89-a37d-e55a30dd1f6d", null, "FlightManager", "Flight Manager" },
                    { "586afb5a-44d0-4050-9ed4-ba1b5ef60b39", null, "HotelManager", "Hotel Manager" },
                    { "5cf14a2f-2fd1-4bb4-87ff-8bcf3fbb2294", null, "Customer", "Customer" },
                    { "849fe137-66ce-418a-bbc5-0643029dd7b3", null, "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "222f5fc2-ec88-477f-99bd-7ae6e2a83dbe");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2313e98b-61aa-4f89-a37d-e55a30dd1f6d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "586afb5a-44d0-4050-9ed4-ba1b5ef60b39");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5cf14a2f-2fd1-4bb4-87ff-8bcf3fbb2294");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "849fe137-66ce-418a-bbc5-0643029dd7b3");

            migrationBuilder.DropColumn(
                name: "FullName",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4b1fab1f-9427-43e8-9675-a3cb389eb73f", null, "HotelManager", "Hotel Manager" },
                    { "87ef9693-905f-468d-8e46-3cfbc8535f5c", null, "Customer", "Customer" },
                    { "af9fd7f9-5f2b-4745-814c-415931a3e3e0", null, "TourManager", "Tour Manager" },
                    { "ed5a1c5f-e95a-41c7-8321-89afd0884f2b", null, "FlightManager", "Flight Manager" }
                });
        }
    }
}
