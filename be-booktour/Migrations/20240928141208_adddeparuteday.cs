using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class adddeparuteday : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4150e23d-535f-4a2b-b6db-b9c1e857ea15");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "54ba6afb-490f-4e91-8efb-330a6a7c3198");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a78d722d-600e-4dfe-8c2b-a1c029744dc6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b5914e31-6efd-48f9-b168-26961fbfbd5d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e09bd6e0-502c-4d76-8df2-0e2764cac766");

            migrationBuilder.AddColumn<DateTime>(
                name: "DepartureDay",
                table: "BookTours",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "DepartureDay",
                table: "BookTours");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4150e23d-535f-4a2b-b6db-b9c1e857ea15", null, "TourManager", "Tour Manager" },
                    { "54ba6afb-490f-4e91-8efb-330a6a7c3198", null, "HotelManager", "Hotel Manager" },
                    { "a78d722d-600e-4dfe-8c2b-a1c029744dc6", null, "Customer", "Customer" },
                    { "b5914e31-6efd-48f9-b168-26961fbfbd5d", null, "FlightManager", "Flight Manager" },
                    { "e09bd6e0-502c-4d76-8df2-0e2764cac766", null, "Admin", "Admin" }
                });
        }
    }
}
