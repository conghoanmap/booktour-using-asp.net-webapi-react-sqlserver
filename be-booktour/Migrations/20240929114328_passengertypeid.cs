using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class passengertypeid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PassengerInfomations_PassengerTypes_PassengerTypesPassengerTypeId",
                table: "PassengerInfomations");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "51e632c6-878f-40cc-81e5-19f0bf790b80");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "63078d25-b7af-472b-a6b9-89c5f2b9a258");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74cef6d9-8599-4301-aaaa-f46a29de3465");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8d38cc37-5ac4-4ab8-a29b-cbf4bd256ac4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b175f234-07d4-4c6b-835e-671695cfa279");

            migrationBuilder.DropColumn(
                name: "PassengerType",
                table: "PassengerInfomations");

            migrationBuilder.RenameColumn(
                name: "PassengerTypesPassengerTypeId",
                table: "PassengerInfomations",
                newName: "PassengerTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_PassengerInfomations_PassengerTypesPassengerTypeId",
                table: "PassengerInfomations",
                newName: "IX_PassengerInfomations_PassengerTypeId");

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

            migrationBuilder.AddForeignKey(
                name: "FK_PassengerInfomations_PassengerTypes_PassengerTypeId",
                table: "PassengerInfomations",
                column: "PassengerTypeId",
                principalTable: "PassengerTypes",
                principalColumn: "PassengerTypeId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PassengerInfomations_PassengerTypes_PassengerTypeId",
                table: "PassengerInfomations");

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

            migrationBuilder.RenameColumn(
                name: "PassengerTypeId",
                table: "PassengerInfomations",
                newName: "PassengerTypesPassengerTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_PassengerInfomations_PassengerTypeId",
                table: "PassengerInfomations",
                newName: "IX_PassengerInfomations_PassengerTypesPassengerTypeId");

            migrationBuilder.AddColumn<int>(
                name: "PassengerType",
                table: "PassengerInfomations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "51e632c6-878f-40cc-81e5-19f0bf790b80", null, "Admin", "Admin" },
                    { "63078d25-b7af-472b-a6b9-89c5f2b9a258", null, "FlightManager", "Flight Manager" },
                    { "74cef6d9-8599-4301-aaaa-f46a29de3465", null, "Customer", "Customer" },
                    { "8d38cc37-5ac4-4ab8-a29b-cbf4bd256ac4", null, "HotelManager", "Hotel Manager" },
                    { "b175f234-07d4-4c6b-835e-671695cfa279", null, "TourManager", "Tour Manager" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_PassengerInfomations_PassengerTypes_PassengerTypesPassengerTypeId",
                table: "PassengerInfomations",
                column: "PassengerTypesPassengerTypeId",
                principalTable: "PassengerTypes",
                principalColumn: "PassengerTypeId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
