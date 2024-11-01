using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class addTourImage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6f22ad9d-37f9-4966-bea9-3870cc034a84");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74e7bfd9-70cf-41a2-be92-d9effbbcfc99");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "79bc723d-4330-49cc-b432-1084cfd8a13e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "86260875-4081-4fe1-80b1-82dffc398462");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fe7f19a2-b463-4b63-85d6-437f7a2b2a58");

            migrationBuilder.AlterColumn<string>(
                name: "TourId",
                table: "BookTours",
                type: "nvarchar(50)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

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

            migrationBuilder.CreateIndex(
                name: "IX_BookTours_TourId",
                table: "BookTours",
                column: "TourId");

            migrationBuilder.AddForeignKey(
                name: "FK_BookTours_Tours_TourId",
                table: "BookTours",
                column: "TourId",
                principalTable: "Tours",
                principalColumn: "TourId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookTours_Tours_TourId",
                table: "BookTours");

            migrationBuilder.DropIndex(
                name: "IX_BookTours_TourId",
                table: "BookTours");

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

            migrationBuilder.AlterColumn<string>(
                name: "TourId",
                table: "BookTours",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6f22ad9d-37f9-4966-bea9-3870cc034a84", null, "FlightManager", "Flight Manager" },
                    { "74e7bfd9-70cf-41a2-be92-d9effbbcfc99", null, "TourManager", "Tour Manager" },
                    { "79bc723d-4330-49cc-b432-1084cfd8a13e", null, "HotelManager", "Hotel Manager" },
                    { "86260875-4081-4fe1-80b1-82dffc398462", null, "Admin", "Admin" },
                    { "fe7f19a2-b463-4b63-85d6-437f7a2b2a58", null, "Customer", "Customer" }
                });
        }
    }
}
