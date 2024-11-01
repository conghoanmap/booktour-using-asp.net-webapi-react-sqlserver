using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class itinerary2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1d2922ad-8a6d-45c6-9515-5951852ddcb1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8e1905be-b001-4cf2-85e5-dce7ece5e5bc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "96f2d9ba-b342-45d1-bfde-8665201b90b1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b159f08c-9baa-465e-9935-adeb3852c09f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f0d723fa-4394-475b-935d-30d06fe97531");

            migrationBuilder.CreateTable(
                name: "Itinerary",
                columns: table => new
                {
                    TourId = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Day = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Itinerary", x => new { x.TourId, x.Day });
                    table.ForeignKey(
                        name: "FK_Itinerary_Tours_TourId",
                        column: x => x.TourId,
                        principalTable: "Tours",
                        principalColumn: "TourId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "15ace81f-68f4-4973-9ee1-d333e9bf0caf", null, "TourManager", "Tour Manager" },
                    { "6699e8d7-cc90-4a18-ab77-ee51652b8b15", null, "HotelManager", "Hotel Manager" },
                    { "810ce20c-1b35-4668-95e4-9c6c6e027e0c", null, "Customer", "Customer" },
                    { "bd5fdeaa-4308-4df4-83bf-17a7ac113b42", null, "Admin", "Admin" },
                    { "f33ecfb3-37b1-4032-95f3-a0183df4740a", null, "FlightManager", "Flight Manager" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Itinerary");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "15ace81f-68f4-4973-9ee1-d333e9bf0caf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6699e8d7-cc90-4a18-ab77-ee51652b8b15");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "810ce20c-1b35-4668-95e4-9c6c6e027e0c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bd5fdeaa-4308-4df4-83bf-17a7ac113b42");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f33ecfb3-37b1-4032-95f3-a0183df4740a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1d2922ad-8a6d-45c6-9515-5951852ddcb1", null, "FlightManager", "Flight Manager" },
                    { "8e1905be-b001-4cf2-85e5-dce7ece5e5bc", null, "Admin", "Admin" },
                    { "96f2d9ba-b342-45d1-bfde-8665201b90b1", null, "Customer", "Customer" },
                    { "b159f08c-9baa-465e-9935-adeb3852c09f", null, "HotelManager", "Hotel Manager" },
                    { "f0d723fa-4394-475b-935d-30d06fe97531", null, "TourManager", "Tour Manager" }
                });
        }
    }
}
