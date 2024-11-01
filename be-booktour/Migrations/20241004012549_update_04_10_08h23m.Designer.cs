﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using be_booktour.Data;

#nullable disable

namespace be_booktour.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20241004012549_update_04_10_08h23m")]
    partial class update_04_10_08h23m
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "7dff28e3-12b0-4472-9c37-0a3b2d5cc951",
                            Name = "Customer",
                            NormalizedName = "Customer"
                        },
                        new
                        {
                            Id = "576602e3-9463-4b66-bcec-8c0098b212dc",
                            Name = "TourManager",
                            NormalizedName = "Tour Manager"
                        },
                        new
                        {
                            Id = "eb205a19-7941-499a-9b7b-98940b7eb952",
                            Name = "HotelManager",
                            NormalizedName = "Hotel Manager"
                        },
                        new
                        {
                            Id = "35ba8c54-8bd6-4974-a6b7-2114ec1d3cbe",
                            Name = "FlightManager",
                            NormalizedName = "Flight Manager"
                        },
                        new
                        {
                            Id = "fd793067-47e2-4919-a6fb-68a19edd251a",
                            Name = "Admin",
                            NormalizedName = "Admin"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("be_booktour.Models.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("be_booktour.Models.BookTour", b =>
                {
                    b.Property<string>("BookTourId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AppUserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("BookDay")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DepartureDay")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Note")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("People")
                        .HasColumnType("int");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("TourId")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("TourTypeId")
                        .HasColumnType("int");

                    b.HasKey("BookTourId");

                    b.HasIndex("AppUserId");

                    b.HasIndex("TourId");

                    b.HasIndex("TourTypeId");

                    b.ToTable("BookTours");
                });

            modelBuilder.Entity("be_booktour.Models.DepartureDate", b =>
                {
                    b.Property<string>("TourId")
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("DepartureDay")
                        .HasColumnType("datetime2");

                    b.HasKey("TourId", "DepartureDay");

                    b.ToTable("DepartureDates");
                });

            modelBuilder.Entity("be_booktour.Models.Image", b =>
                {
                    b.Property<int>("ImageId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ImageId"));

                    b.Property<string>("ImageName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ImageId");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("be_booktour.Models.Itinerary", b =>
                {
                    b.Property<string>("TourId")
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("Day")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TourId", "Day");

                    b.ToTable("Itineraries");
                });

            modelBuilder.Entity("be_booktour.Models.Location", b =>
                {
                    b.Property<int>("LocationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("LocationId"));

                    b.Property<string>("LocationName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RegionId")
                        .HasColumnType("int");

                    b.HasKey("LocationId");

                    b.HasIndex("RegionId");

                    b.ToTable("Locations");
                });

            modelBuilder.Entity("be_booktour.Models.PassengerInfomation", b =>
                {
                    b.Property<string>("PassengerInfomationId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("BookTourId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PassengerTypeId")
                        .HasColumnType("int");

                    b.Property<bool>("SingleRoom")
                        .HasColumnType("bit");

                    b.HasKey("PassengerInfomationId");

                    b.HasIndex("BookTourId");

                    b.HasIndex("PassengerTypeId");

                    b.ToTable("PassengerInfomations");
                });

            modelBuilder.Entity("be_booktour.Models.PassengerType", b =>
                {
                    b.Property<int>("PassengerTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PassengerTypeId"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PassengerTypeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PercentPrice")
                        .HasColumnType("int");

                    b.HasKey("PassengerTypeId");

                    b.ToTable("PassengerTypes");
                });

            modelBuilder.Entity("be_booktour.Models.Payment", b =>
                {
                    b.Property<string>("PaymentId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("BookTourId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("PaymentMethodId")
                        .HasColumnType("int");

                    b.Property<string>("PaymentNote")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(18,0)");

                    b.HasKey("PaymentId");

                    b.HasIndex("BookTourId");

                    b.HasIndex("PaymentMethodId");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("be_booktour.Models.PaymentMethod", b =>
                {
                    b.Property<int>("PaymentMethodId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PaymentMethodId"));

                    b.Property<string>("PaymentMethodName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PaymentMethodId");

                    b.ToTable("PaymentMethods");
                });

            modelBuilder.Entity("be_booktour.Models.Region", b =>
                {
                    b.Property<int>("RegionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RegionId"));

                    b.Property<string>("RegionName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RegionId");

                    b.ToTable("Regions");
                });

            modelBuilder.Entity("be_booktour.Models.Review", b =>
                {
                    b.Property<string>("AppUserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("TourId")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Comment")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.HasKey("AppUserId", "TourId");

                    b.HasIndex("TourId");

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("be_booktour.Models.Tour", b =>
                {
                    b.Property<string>("TourId")
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("AdvanceDeposit")
                        .HasColumnType("int");

                    b.Property<int>("Days")
                        .HasColumnType("int");

                    b.Property<int>("DepartureLocationId")
                        .HasColumnType("int");

                    b.Property<int>("DestinationLocationId")
                        .HasColumnType("int");

                    b.Property<int>("Finished")
                        .HasColumnType("int");

                    b.Property<int>("ImageId")
                        .HasColumnType("int");

                    b.Property<int>("MaxPeople")
                        .HasColumnType("int");

                    b.Property<string>("MeetingPoint")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("SingleRoomPrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("TourName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Vehicle")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TourId");

                    b.HasIndex("DepartureLocationId");

                    b.HasIndex("DestinationLocationId");

                    b.HasIndex("ImageId");

                    b.ToTable("Tours");
                });

            modelBuilder.Entity("be_booktour.Models.TourImage", b =>
                {
                    b.Property<string>("TourId")
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("ImageId")
                        .HasColumnType("int");

                    b.HasKey("TourId", "ImageId");

                    b.HasIndex("ImageId");

                    b.ToTable("TourImages");
                });

            modelBuilder.Entity("be_booktour.Models.TourTypes", b =>
                {
                    b.Property<int>("TourTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TourTypeId"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PercentPrice")
                        .HasColumnType("int");

                    b.Property<string>("TourTypeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TourTypeId");

                    b.ToTable("TourTypes");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("be_booktour.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("be_booktour.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("be_booktour.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("be_booktour.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("be_booktour.Models.BookTour", b =>
                {
                    b.HasOne("be_booktour.Models.AppUser", null)
                        .WithMany("BookTours")
                        .HasForeignKey("AppUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("be_booktour.Models.Tour", null)
                        .WithMany("BookTours")
                        .HasForeignKey("TourId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("be_booktour.Models.TourTypes", "TourType")
                        .WithMany("BookTours")
                        .HasForeignKey("TourTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("TourType");
                });

            modelBuilder.Entity("be_booktour.Models.DepartureDate", b =>
                {
                    b.HasOne("be_booktour.Models.Tour", "Tour")
                        .WithMany("DepartureDates")
                        .HasForeignKey("TourId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Tour");
                });

            modelBuilder.Entity("be_booktour.Models.Itinerary", b =>
                {
                    b.HasOne("be_booktour.Models.Tour", "Tour")
                        .WithMany("Itineraries")
                        .HasForeignKey("TourId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Tour");
                });

            modelBuilder.Entity("be_booktour.Models.Location", b =>
                {
                    b.HasOne("be_booktour.Models.Region", "Region")
                        .WithMany()
                        .HasForeignKey("RegionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Region");
                });

            modelBuilder.Entity("be_booktour.Models.PassengerInfomation", b =>
                {
                    b.HasOne("be_booktour.Models.BookTour", "BookTour")
                        .WithMany("PassengerInfomations")
                        .HasForeignKey("BookTourId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("be_booktour.Models.PassengerType", "PassengerType")
                        .WithMany("PassengerInfomations")
                        .HasForeignKey("PassengerTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BookTour");

                    b.Navigation("PassengerType");
                });

            modelBuilder.Entity("be_booktour.Models.Payment", b =>
                {
                    b.HasOne("be_booktour.Models.BookTour", "BookTour")
                        .WithMany()
                        .HasForeignKey("BookTourId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("be_booktour.Models.PaymentMethod", "PaymentMethod")
                        .WithMany("Payments")
                        .HasForeignKey("PaymentMethodId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BookTour");

                    b.Navigation("PaymentMethod");
                });

            modelBuilder.Entity("be_booktour.Models.Review", b =>
                {
                    b.HasOne("be_booktour.Models.AppUser", "AppUser")
                        .WithMany("Reviews")
                        .HasForeignKey("AppUserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("be_booktour.Models.Tour", "Tour")
                        .WithMany("Reviews")
                        .HasForeignKey("TourId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AppUser");

                    b.Navigation("Tour");
                });

            modelBuilder.Entity("be_booktour.Models.Tour", b =>
                {
                    b.HasOne("be_booktour.Models.Location", "DepartureLocation")
                        .WithMany("DepartureTours")
                        .HasForeignKey("DepartureLocationId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("be_booktour.Models.Location", "DestinationLocation")
                        .WithMany("DestinationTours")
                        .HasForeignKey("DestinationLocationId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("be_booktour.Models.Image", "Image")
                        .WithMany()
                        .HasForeignKey("ImageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("DepartureLocation");

                    b.Navigation("DestinationLocation");

                    b.Navigation("Image");
                });

            modelBuilder.Entity("be_booktour.Models.TourImage", b =>
                {
                    b.HasOne("be_booktour.Models.Image", "Image")
                        .WithMany("TourImages")
                        .HasForeignKey("ImageId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("be_booktour.Models.Tour", "Tour")
                        .WithMany("TourImages")
                        .HasForeignKey("TourId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Image");

                    b.Navigation("Tour");
                });

            modelBuilder.Entity("be_booktour.Models.AppUser", b =>
                {
                    b.Navigation("BookTours");

                    b.Navigation("Reviews");
                });

            modelBuilder.Entity("be_booktour.Models.BookTour", b =>
                {
                    b.Navigation("PassengerInfomations");
                });

            modelBuilder.Entity("be_booktour.Models.Image", b =>
                {
                    b.Navigation("TourImages");
                });

            modelBuilder.Entity("be_booktour.Models.Location", b =>
                {
                    b.Navigation("DepartureTours");

                    b.Navigation("DestinationTours");
                });

            modelBuilder.Entity("be_booktour.Models.PassengerType", b =>
                {
                    b.Navigation("PassengerInfomations");
                });

            modelBuilder.Entity("be_booktour.Models.PaymentMethod", b =>
                {
                    b.Navigation("Payments");
                });

            modelBuilder.Entity("be_booktour.Models.Tour", b =>
                {
                    b.Navigation("BookTours");

                    b.Navigation("DepartureDates");

                    b.Navigation("Itineraries");

                    b.Navigation("Reviews");

                    b.Navigation("TourImages");
                });

            modelBuilder.Entity("be_booktour.Models.TourTypes", b =>
                {
                    b.Navigation("BookTours");
                });
#pragma warning restore 612, 618
        }
    }
}
