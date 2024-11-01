using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace be_booktour.Migrations
{
    /// <inheritdoc />
    public partial class changetypedataimagename : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3ebdddc1-d17a-403a-8954-aec73934605b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "458e95f1-9ea6-41fb-a1d0-dcaf6a4fa890");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "93a0f126-88f5-465f-808c-4113194b0931");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a68b42c3-5d7a-4a55-a24a-7998485a416b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b52b009c-d848-4919-b4a4-4e3c1c6646b7");

            migrationBuilder.AlterColumn<string>(
                name: "ImageName",
                table: "Images",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "73377cbb-244f-4885-bdb7-849da7976809", null, "TourManager", "Tour Manager" },
                    { "c8ed4330-ee23-412e-baad-cf2e91a9d12f", null, "Customer", "Customer" },
                    { "de275bd4-5492-4824-a073-a5b3be1f7076", null, "Admin", "Admin" },
                    { "fe4b46c2-f32e-44e1-a9a4-250edffda848", null, "HotelManager", "Hotel Manager" },
                    { "ffacec4f-a6fb-4d7c-bb8b-92fff8fb0c0f", null, "FlightManager", "Flight Manager" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73377cbb-244f-4885-bdb7-849da7976809");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c8ed4330-ee23-412e-baad-cf2e91a9d12f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "de275bd4-5492-4824-a073-a5b3be1f7076");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fe4b46c2-f32e-44e1-a9a4-250edffda848");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ffacec4f-a6fb-4d7c-bb8b-92fff8fb0c0f");

            migrationBuilder.AlterColumn<int>(
                name: "ImageName",
                table: "Images",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3ebdddc1-d17a-403a-8954-aec73934605b", null, "HotelManager", "Hotel Manager" },
                    { "458e95f1-9ea6-41fb-a1d0-dcaf6a4fa890", null, "Customer", "Customer" },
                    { "93a0f126-88f5-465f-808c-4113194b0931", null, "TourManager", "Tour Manager" },
                    { "a68b42c3-5d7a-4a55-a24a-7998485a416b", null, "FlightManager", "Flight Manager" },
                    { "b52b009c-d848-4919-b4a4-4e3c1c6646b7", null, "Admin", "Admin" }
                });
        }
    }
}
