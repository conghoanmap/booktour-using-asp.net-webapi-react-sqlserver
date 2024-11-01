using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class Descriptionadd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1b1631f7-58b8-47d9-b751-96930604f0f3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5820f08f-b8e0-4740-9430-b7a30f899bfa");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8b23e269-2418-49cb-a4ab-4e9ec5a9a6b9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "93704a65-e31b-4dd6-9326-9bdcb403edc9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d72dae62-ce1b-4723-9005-93937b11e956");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "TourTypes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "62269619-5fed-4a7e-bd38-4ba829955d30", null, "TourManager", "Tour Manager" },
                    { "754fdc3d-d9d9-45bc-a73c-1a81fabcf24f", null, "FlightManager", "Flight Manager" },
                    { "8cef20bd-66f5-44f2-9ab9-a23b7d20fbda", null, "Customer", "Customer" },
                    { "ca26c0a2-9ba6-4036-8f6b-0dbbc9cac29b", null, "HotelManager", "Hotel Manager" },
                    { "d0489a1b-1b31-4ec1-84fe-b0dddcfa6031", null, "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "62269619-5fed-4a7e-bd38-4ba829955d30");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "754fdc3d-d9d9-45bc-a73c-1a81fabcf24f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8cef20bd-66f5-44f2-9ab9-a23b7d20fbda");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ca26c0a2-9ba6-4036-8f6b-0dbbc9cac29b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d0489a1b-1b31-4ec1-84fe-b0dddcfa6031");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "TourTypes");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1b1631f7-58b8-47d9-b751-96930604f0f3", null, "Customer", "Customer" },
                    { "5820f08f-b8e0-4740-9430-b7a30f899bfa", null, "FlightManager", "Flight Manager" },
                    { "8b23e269-2418-49cb-a4ab-4e9ec5a9a6b9", null, "Admin", "Admin" },
                    { "93704a65-e31b-4dd6-9326-9bdcb403edc9", null, "HotelManager", "Hotel Manager" },
                    { "d72dae62-ce1b-4723-9005-93937b11e956", null, "TourManager", "Tour Manager" }
                });
        }
    }
}
