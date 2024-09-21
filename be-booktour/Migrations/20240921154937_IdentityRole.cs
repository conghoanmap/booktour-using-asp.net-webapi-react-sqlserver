using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class IdentityRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
        }
    }
}
