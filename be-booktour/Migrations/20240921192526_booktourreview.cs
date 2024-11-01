using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class booktourreview : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "18f677b1-e651-4002-80ee-e0fb487bf93f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1eae9f78-75ec-4996-a1c5-9649591ca723");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8652e6d3-7fbb-40bf-ae67-072c5499c9cb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9bb7d159-7e2d-49d3-a3d8-58c7786ac54b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b4673085-9d1e-428c-9f88-d800c9d60da7");

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    TourId = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    AppUserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => new { x.AppUserId, x.TourId });
                    table.ForeignKey(
                        name: "FK_Reviews_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reviews_Tours_TourId",
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
                    { "1f3c5a46-4484-4fda-90eb-eaf36ccd456d", null, "TourManager", "Tour Manager" },
                    { "67256c37-88f0-488c-91e8-7a3f34b0577f", null, "Customer", "Customer" },
                    { "6df98274-0e85-4eaf-b143-dd93d42a3c8b", null, "FlightManager", "Flight Manager" },
                    { "91ac70a8-75ab-40d2-ab04-fb428721d406", null, "Admin", "Admin" },
                    { "cff324cc-94e4-43d2-8117-624d6cd0fe34", null, "HotelManager", "Hotel Manager" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_TourId",
                table: "Reviews",
                column: "TourId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reviews");

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

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "18f677b1-e651-4002-80ee-e0fb487bf93f", null, "FlightManager", "Flight Manager" },
                    { "1eae9f78-75ec-4996-a1c5-9649591ca723", null, "TourManager", "Tour Manager" },
                    { "8652e6d3-7fbb-40bf-ae67-072c5499c9cb", null, "Admin", "Admin" },
                    { "9bb7d159-7e2d-49d3-a3d8-58c7786ac54b", null, "Customer", "Customer" },
                    { "b4673085-9d1e-428c-9f88-d800c9d60da7", null, "HotelManager", "Hotel Manager" }
                });
        }
    }
}
