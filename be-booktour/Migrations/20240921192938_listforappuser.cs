using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class listforappuser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1f3c5a46-4484-4fda-90eb-eaf36ccd456d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "67256c37-88f0-488c-91e8-7a3f34b0577f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6df98274-0e85-4eaf-b143-dd93d42a3c8b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "91ac70a8-75ab-40d2-ab04-fb428721d406");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cff324cc-94e4-43d2-8117-624d6cd0fe34");

            migrationBuilder.CreateTable(
                name: "PassengerTypes",
                columns: table => new
                {
                    PassengerTypeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PassengerTypeName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PercentPrice = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassengerTypes", x => x.PassengerTypeId);
                });

            migrationBuilder.CreateTable(
                name: "TourTypes",
                columns: table => new
                {
                    TourTypeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TourTypeName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PercentPrice = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TourTypes", x => x.TourTypeId);
                });

            migrationBuilder.CreateTable(
                name: "BookTours",
                columns: table => new
                {
                    BookTourId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    TourId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AppUserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    People = table.Column<int>(type: "int", nullable: false),
                    TotalPrice = table.Column<int>(type: "int", nullable: false),
                    BookDay = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TourTypeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookTours", x => x.BookTourId);
                    table.ForeignKey(
                        name: "FK_BookTours_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookTours_TourTypes_TourTypeId",
                        column: x => x.TourTypeId,
                        principalTable: "TourTypes",
                        principalColumn: "TourTypeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PassengerInfomations",
                columns: table => new
                {
                    PassengerInfomationId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PassengerType = table.Column<int>(type: "int", nullable: false),
                    BookTourId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SingleRoom = table.Column<bool>(type: "bit", nullable: false),
                    PassengerTypesPassengerTypeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassengerInfomations", x => x.PassengerInfomationId);
                    table.ForeignKey(
                        name: "FK_PassengerInfomations_BookTours_BookTourId",
                        column: x => x.BookTourId,
                        principalTable: "BookTours",
                        principalColumn: "BookTourId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PassengerInfomations_PassengerTypes_PassengerTypesPassengerTypeId",
                        column: x => x.PassengerTypesPassengerTypeId,
                        principalTable: "PassengerTypes",
                        principalColumn: "PassengerTypeId",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_BookTours_AppUserId",
                table: "BookTours",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_BookTours_TourTypeId",
                table: "BookTours",
                column: "TourTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_PassengerInfomations_BookTourId",
                table: "PassengerInfomations",
                column: "BookTourId");

            migrationBuilder.CreateIndex(
                name: "IX_PassengerInfomations_PassengerTypesPassengerTypeId",
                table: "PassengerInfomations",
                column: "PassengerTypesPassengerTypeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PassengerInfomations");

            migrationBuilder.DropTable(
                name: "BookTours");

            migrationBuilder.DropTable(
                name: "PassengerTypes");

            migrationBuilder.DropTable(
                name: "TourTypes");

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
                    { "1f3c5a46-4484-4fda-90eb-eaf36ccd456d", null, "TourManager", "Tour Manager" },
                    { "67256c37-88f0-488c-91e8-7a3f34b0577f", null, "Customer", "Customer" },
                    { "6df98274-0e85-4eaf-b143-dd93d42a3c8b", null, "FlightManager", "Flight Manager" },
                    { "91ac70a8-75ab-40d2-ab04-fb428721d406", null, "Admin", "Admin" },
                    { "cff324cc-94e4-43d2-8117-624d6cd0fe34", null, "HotelManager", "Hotel Manager" }
                });
        }
    }
}
