using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class update_04_10_08h23m : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2999e186-b4df-4700-9fbc-26cf75023207");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2d52533a-a505-40c5-a580-55ccbb1b1b48");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73cb4cae-908c-4934-b5c1-e778bdf560fa");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b6fc1142-7405-40f5-a05d-3c23ce72da1c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e78a8566-a8bc-405b-803d-ec22d8bd6991");

            migrationBuilder.AddColumn<int>(
                name: "AdvanceDeposit",
                table: "Tours",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "SingleRoomPrice",
                table: "Tours",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "BookTours",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "PaymentMethods",
                columns: table => new
                {
                    PaymentMethodId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentMethodName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentMethods", x => x.PaymentMethodId);
                });

            migrationBuilder.CreateTable(
                name: "Payments",
                columns: table => new
                {
                    PaymentId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    BookTourId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PaymentMethodId = table.Column<int>(type: "int", nullable: false),
                    PaymentStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PaymentNote = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TotalPrice = table.Column<decimal>(type: "decimal(18,0)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payments", x => x.PaymentId);
                    table.ForeignKey(
                        name: "FK_Payments_BookTours_BookTourId",
                        column: x => x.BookTourId,
                        principalTable: "BookTours",
                        principalColumn: "BookTourId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Payments_PaymentMethods_PaymentMethodId",
                        column: x => x.PaymentMethodId,
                        principalTable: "PaymentMethods",
                        principalColumn: "PaymentMethodId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "35ba8c54-8bd6-4974-a6b7-2114ec1d3cbe", null, "FlightManager", "Flight Manager" },
                    { "576602e3-9463-4b66-bcec-8c0098b212dc", null, "TourManager", "Tour Manager" },
                    { "7dff28e3-12b0-4472-9c37-0a3b2d5cc951", null, "Customer", "Customer" },
                    { "eb205a19-7941-499a-9b7b-98940b7eb952", null, "HotelManager", "Hotel Manager" },
                    { "fd793067-47e2-4919-a6fb-68a19edd251a", null, "Admin", "Admin" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Payments_BookTourId",
                table: "Payments",
                column: "BookTourId");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_PaymentMethodId",
                table: "Payments",
                column: "PaymentMethodId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Payments");

            migrationBuilder.DropTable(
                name: "PaymentMethods");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "35ba8c54-8bd6-4974-a6b7-2114ec1d3cbe");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "576602e3-9463-4b66-bcec-8c0098b212dc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7dff28e3-12b0-4472-9c37-0a3b2d5cc951");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "eb205a19-7941-499a-9b7b-98940b7eb952");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fd793067-47e2-4919-a6fb-68a19edd251a");

            migrationBuilder.DropColumn(
                name: "AdvanceDeposit",
                table: "Tours");

            migrationBuilder.DropColumn(
                name: "SingleRoomPrice",
                table: "Tours");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "BookTours");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2999e186-b4df-4700-9fbc-26cf75023207", null, "Admin", "Admin" },
                    { "2d52533a-a505-40c5-a580-55ccbb1b1b48", null, "HotelManager", "Hotel Manager" },
                    { "73cb4cae-908c-4934-b5c1-e778bdf560fa", null, "TourManager", "Tour Manager" },
                    { "b6fc1142-7405-40f5-a05d-3c23ce72da1c", null, "Customer", "Customer" },
                    { "e78a8566-a8bc-405b-803d-ec22d8bd6991", null, "FlightManager", "Flight Manager" }
                });
        }
    }
}
