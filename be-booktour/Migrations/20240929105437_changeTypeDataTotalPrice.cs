using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class changeTypeDataTotalPrice : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<decimal>(
                name: "TotalPrice",
                table: "BookTours",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.AlterColumn<int>(
                name: "TotalPrice",
                table: "BookTours",
                type: "int",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

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
    }
}
