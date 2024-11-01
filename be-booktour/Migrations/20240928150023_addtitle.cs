using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class addtitle : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2516468f-a51a-4334-906e-1d0b4cad907c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8e872af4-6033-4165-9e05-1a247057010b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bfb1788b-b3dc-4d87-9806-85fcf58781d6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cb4f6c19-e201-4662-9d59-f64cd7b81e70");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e3902f7f-2068-402b-89fc-f45dcd438950");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Itineraries",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Itineraries");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2516468f-a51a-4334-906e-1d0b4cad907c", null, "Admin", "Admin" },
                    { "8e872af4-6033-4165-9e05-1a247057010b", null, "FlightManager", "Flight Manager" },
                    { "bfb1788b-b3dc-4d87-9806-85fcf58781d6", null, "Customer", "Customer" },
                    { "cb4f6c19-e201-4662-9d59-f64cd7b81e70", null, "HotelManager", "Hotel Manager" },
                    { "e3902f7f-2068-402b-89fc-f45dcd438950", null, "TourManager", "Tour Manager" }
                });
        }
    }
}
