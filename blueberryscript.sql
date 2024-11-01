USE [master]
GO
/****** Object:  Database [dbblueberry]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE DATABASE [dbblueberry]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'dbblueberry', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\dbblueberry.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'dbblueberry_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\dbblueberry_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [dbblueberry] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [dbblueberry].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [dbblueberry] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [dbblueberry] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [dbblueberry] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [dbblueberry] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [dbblueberry] SET ARITHABORT OFF 
GO
ALTER DATABASE [dbblueberry] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [dbblueberry] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [dbblueberry] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [dbblueberry] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [dbblueberry] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [dbblueberry] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [dbblueberry] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [dbblueberry] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [dbblueberry] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [dbblueberry] SET  ENABLE_BROKER 
GO
ALTER DATABASE [dbblueberry] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [dbblueberry] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [dbblueberry] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [dbblueberry] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [dbblueberry] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [dbblueberry] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [dbblueberry] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [dbblueberry] SET RECOVERY FULL 
GO
ALTER DATABASE [dbblueberry] SET  MULTI_USER 
GO
ALTER DATABASE [dbblueberry] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [dbblueberry] SET DB_CHAINING OFF 
GO
ALTER DATABASE [dbblueberry] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [dbblueberry] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [dbblueberry] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [dbblueberry] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'dbblueberry', N'ON'
GO
ALTER DATABASE [dbblueberry] SET QUERY_STORE = ON
GO
ALTER DATABASE [dbblueberry] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [dbblueberry]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](450) NOT NULL,
	[ProviderKey] [nvarchar](450) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[FullName] [nvarchar](max) NOT NULL,
	[AccountBalance] [decimal](18, 2) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NOT NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](450) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Assesses]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Assesses](
	[AssessId] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [nvarchar](450) NOT NULL,
	[AssessDate] [datetime2](7) NOT NULL,
	[StarValue] [int] NOT NULL,
	[Comment] [nvarchar](max) NOT NULL,
	[AppUserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Assesses] PRIMARY KEY CLUSTERED 
(
	[AssessId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Carts]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Carts](
	[CartId] [nvarchar](450) NOT NULL,
	[AppUserId] [nvarchar](450) NOT NULL,
	[ProductId] [nvarchar](450) NOT NULL,
	[Quantity] [int] NOT NULL,
	[TotalPrice] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_Carts] PRIMARY KEY CLUSTERED 
(
	[CartId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[CategoryId] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](max) NOT NULL,
	[CategoryImage] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Colors]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Colors](
	[ColorId] [nvarchar](450) NOT NULL,
	[ColorName] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Colors] PRIMARY KEY CLUSTERED 
(
	[ColorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Favourites]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Favourites](
	[FavouriteId] [int] IDENTITY(1,1) NOT NULL,
	[AppUserId] [nvarchar](450) NOT NULL,
	[ProductId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Favourites] PRIMARY KEY CLUSTERED 
(
	[FavouriteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderDetails]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetails](
	[OrderId] [int] NOT NULL,
	[ProductId] [nvarchar](450) NOT NULL,
	[Quantity] [int] NOT NULL,
	[TotalPrice] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_OrderDetails] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[AppUserId] [nvarchar](450) NOT NULL,
	[OrderDate] [datetime2](7) NOT NULL,
	[OrderStatus] [nvarchar](max) NOT NULL,
	[PaymentStatus] [bit] NOT NULL,
	[Note] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NOT NULL,
	[PaymentMethod] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ProductId] [nvarchar](450) NOT NULL,
	[ProductName] [nvarchar](max) NOT NULL,
	[ProductImage] [nvarchar](max) NULL,
	[Price] [decimal](18, 2) NOT NULL,
	[Discount] [int] NOT NULL,
	[Inventory] [int] NOT NULL,
	[ValueUnit] [int] NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[UnitId] [int] NOT NULL,
	[ColorId] [nvarchar](450) NOT NULL,
	[CategoryId] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Units]    Script Date: 11/1/2024 7:32:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Units](
	[UnitId] [int] IDENTITY(1,1) NOT NULL,
	[UnitName] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Units] PRIMARY KEY CLUSTERED 
(
	[UnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240808172158_init', N'8.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240815080230_unrequiredAppUserId', N'8.0.8')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240815092127_AddressPhoneOrder', N'8.0.8')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240815092850_AddPaymentMethod', N'8.0.8')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'8c84c084-754c-47c5-b78e-bb9bb80743ac', N'Admin', N'ADMIN', NULL)
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'b6983e23-bfc9-42d6-a6a1-eab2583fd7cd', N'User', N'USER', NULL)
GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'5c16e3cc-7451-4c6a-866a-9788751dca32', N'8c84c084-754c-47c5-b78e-bb9bb80743ac')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'a7dad34e-48ff-43ba-9cd1-eddb95837596', N'8c84c084-754c-47c5-b78e-bb9bb80743ac')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'36bb7375-19e1-4e72-8fad-753d848c8c88', N'b6983e23-bfc9-42d6-a6a1-eab2583fd7cd')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'5c16e3cc-7451-4c6a-866a-9788751dca32', N'b6983e23-bfc9-42d6-a6a1-eab2583fd7cd')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'6d43e79d-63f8-4ac7-a36d-701ad7c086f4', N'b6983e23-bfc9-42d6-a6a1-eab2583fd7cd')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'a7dad34e-48ff-43ba-9cd1-eddb95837596', N'b6983e23-bfc9-42d6-a6a1-eab2583fd7cd')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'b5703ab1-e7a7-40b5-a4e0-c33553169b92', N'b6983e23-bfc9-42d6-a6a1-eab2583fd7cd')
GO
INSERT [dbo].[AspNetUsers] ([Id], [FullName], [AccountBalance], [Address], [Phone], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'36bb7375-19e1-4e72-8fad-753d848c8c88', N'Lê Công Hoan', CAST(1000000.00 AS Decimal(18, 2)), N'', N'', N'lhoan210803', N'LHOAN210803', N'lhoan426@gmail.com', N'LHOAN426@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEMN4magphRYqPXDuavR3hkrHh3EE9hmtuDdDjLaRKKJrhxg2GbhXFFQWJQvBCX0+QA==', N'34XQQLRBDHGTKQKQI554JAPFU4MDU6MZ', N'2cf8e34a-ced2-484c-8838-54a70b64e316', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [FullName], [AccountBalance], [Address], [Phone], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'5c16e3cc-7451-4c6a-866a-9788751dca32', N'Lê Công Hoan', CAST(1000000.00 AS Decimal(18, 2)), N'', N'', N'hoanle2108', N'HOANLE2108', N'lhoan426@gmail.com', N'LHOAN426@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAELKBAYoQZJdLbB0sW5fpAcrkPuQEIZ0Z9HdFmXGHl8++ea+D94fJo70h3PaSGKm9Eg==', N'X2URQDQYGW2YZVHD3O365IJP7NMPRCYT', N'1d1532d5-cf25-42a5-a4d6-29a95786716d', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [FullName], [AccountBalance], [Address], [Phone], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'6d43e79d-63f8-4ac7-a36d-701ad7c086f4', N'Lê Hoannnnnn', CAST(1000000.00 AS Decimal(18, 2)), N'', N'', N'lnchoan2108', N'LNCHOAN2108', N'lhoan2822@gmail.com', N'LHOAN2822@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAELsEjef7oYRSHBMSYi4IE4UWzxypTKDgVsVPxRAcU/TCqXgSDIwkt4l1mqkd9F3Ukw==', N'B65NOZS5QZCV6OFXO7QVZTEGSVXRBBZO', N'68f10521-adbc-4e9f-ac39-26d57f93dccc', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [FullName], [AccountBalance], [Address], [Phone], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'a7dad34e-48ff-43ba-9cd1-eddb95837596', N'Lê Nguyễn Công Hoan', CAST(853000.00 AS Decimal(18, 2)), N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'lhoan2108', N'LHOAN2108', N'hoan39800@gmail.com', N'HOAN39800@GMAIL.COM', 1, N'AQAAAAIAAYagAAAAEBvlS49WJq48WDvGtTx8UnJcj7ZIdJ2Uz7v8t2Ty+/wiNxRBQw20dyX0ov4fdNlg3w==', N'KF4TDLVB7FOIQZQKR7LJ6R65MNXPXQ3E', N'3ef0de86-e0f0-482a-b7e0-9837b1922432', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [FullName], [AccountBalance], [Address], [Phone], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'b5703ab1-e7a7-40b5-a4e0-c33553169b92', N'Lê Công Hoan', CAST(1162000.00 AS Decimal(18, 2)), N'Phú Yên', N'0369656502', N'conghoan2108', N'CONGHOAN2108', N'lhoan2822@gmail.com', N'LHOAN2822@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEDwJI3HKkH6v/5d/H4Fwu7lMvWRGa5XFsvxnWKyVEMB04uf1ncbQyopFB4RpaLInfA==', N'OF3E7HO5JLEFHDID6WUGTD22MDGRLW2W', N'775b92dd-a755-4a8c-ae8c-195cc0c80b02', NULL, 0, 0, NULL, 1, 0)
GO
SET IDENTITY_INSERT [dbo].[Assesses] ON 

INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (1, N'#12345671', CAST(N'2024-08-13T16:53:41.9868095' AS DateTime2), 3, N'Tuyệt vời!!!', N'a7dad34e-48ff-43ba-9cd1-eddb95837596')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (2, N'#12345671', CAST(N'2024-08-14T22:09:13.5963667' AS DateTime2), 5, N'Hehe', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (3, N'#12345671', CAST(N'2024-08-14T22:10:51.9503113' AS DateTime2), 3, N'Sản phẩm tốt', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (4, N'#12345671', CAST(N'2024-08-14T22:11:17.4684386' AS DateTime2), 3, N'Sản phẩm dởm', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (5, N'#12345671', CAST(N'2024-08-14T22:12:56.5206507' AS DateTime2), 3, N'Đắt quá', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (6, N'#12345671', CAST(N'2024-08-14T22:15:37.6048037' AS DateTime2), 3, N'Rẻ quá', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (7, N'#12345671', CAST(N'2024-08-14T22:18:52.5505817' AS DateTime2), 3, N'Giao hàng chậm quá 😃', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (8, N'#12345672', CAST(N'2024-08-15T12:58:03.5787343' AS DateTime2), 3, N'Tuyệt vời', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (9, N'#12345678', CAST(N'2024-08-27T16:32:14.0885851' AS DateTime2), 3, N'Tuyệt vời', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (10, N'#12345693', CAST(N'2024-10-02T08:44:26.1050495' AS DateTime2), 3, N'vãi cả nồi', N'a7dad34e-48ff-43ba-9cd1-eddb95837596')
INSERT [dbo].[Assesses] ([AssessId], [ProductId], [AssessDate], [StarValue], [Comment], [AppUserId]) VALUES (11, N'#12345693', CAST(N'2024-10-02T08:44:39.9063706' AS DateTime2), 3, N'hehe', N'a7dad34e-48ff-43ba-9cd1-eddb95837596')
SET IDENTITY_INSERT [dbo].[Assesses] OFF
GO
INSERT [dbo].[Carts] ([CartId], [AppUserId], [ProductId], [Quantity], [TotalPrice]) VALUES (N'#CART36584910', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92', N'#12345674', 2, CAST(100000.00 AS Decimal(18, 2)))
INSERT [dbo].[Carts] ([CartId], [AppUserId], [ProductId], [Quantity], [TotalPrice]) VALUES (N'#CART59186764', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92', N'#12345672', 3, CAST(150000.00 AS Decimal(18, 2)))
INSERT [dbo].[Carts] ([CartId], [AppUserId], [ProductId], [Quantity], [TotalPrice]) VALUES (N'#CART84167287', N'b5703ab1-e7a7-40b5-a4e0-c33553169b92', N'#12345673', 3, CAST(150000.00 AS Decimal(18, 2)))
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([CategoryId], [CategoryName], [CategoryImage]) VALUES (1, N'Defaut Name', N'file:///C:/Users/ADMIN/Documents/My%20Web%20Sites/…projects/blueberry-html/assets/img/category/4.svg')
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
INSERT [dbo].[Colors] ([ColorId], [ColorName]) VALUES (N'#000000', N'Default Color Name')
GO
SET IDENTITY_INSERT [dbo].[Favourites] ON 

INSERT [dbo].[Favourites] ([FavouriteId], [AppUserId], [ProductId]) VALUES (8, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', N'#12345675')
INSERT [dbo].[Favourites] ([FavouriteId], [AppUserId], [ProductId]) VALUES (9, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', N'#12345679')
INSERT [dbo].[Favourites] ([FavouriteId], [AppUserId], [ProductId]) VALUES (10, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', N'#12345671')
INSERT [dbo].[Favourites] ([FavouriteId], [AppUserId], [ProductId]) VALUES (1010, N'b5703ab1-e7a7-40b5-a4e0-c33553169b92', N'#12345674')
INSERT [dbo].[Favourites] ([FavouriteId], [AppUserId], [ProductId]) VALUES (1011, N'b5703ab1-e7a7-40b5-a4e0-c33553169b92', N'#12345671')
INSERT [dbo].[Favourites] ([FavouriteId], [AppUserId], [ProductId]) VALUES (1012, N'b5703ab1-e7a7-40b5-a4e0-c33553169b92', N'#12345672')
INSERT [dbo].[Favourites] ([FavouriteId], [AppUserId], [ProductId]) VALUES (1013, N'b5703ab1-e7a7-40b5-a4e0-c33553169b92', N'#12345673')
INSERT [dbo].[Favourites] ([FavouriteId], [AppUserId], [ProductId]) VALUES (1014, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', N'#12345693')
SET IDENTITY_INSERT [dbo].[Favourites] OFF
GO
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (37, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (38, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (39, N'#12345696', 2, CAST(42000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (40, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (41, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (42, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (43, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (44, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (45, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (46, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (47, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (48, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (49, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (50, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (51, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (52, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (53, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (54, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (55, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (56, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (57, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (58, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (59, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (60, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (61, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (62, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (63, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (64, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (65, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (66, N'#12345672', 1, CAST(49500.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (67, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (68, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (69, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (70, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (71, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (72, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (73, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (74, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1070, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1071, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1072, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1073, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1074, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1075, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1076, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1077, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1078, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1079, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1080, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1081, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1082, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1083, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1084, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1085, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1086, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1087, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1088, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1089, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1090, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1091, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderDetails] ([OrderId], [ProductId], [Quantity], [TotalPrice]) VALUES (1092, N'#12345696', 1, CAST(21000.00 AS Decimal(18, 2)))
GO
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (37, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T11:25:11.5619764' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (38, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T11:26:07.1775372' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (39, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T11:27:39.8050125' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (40, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T11:28:38.1030250' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (41, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T11:30:51.0321175' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (42, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T11:43:42.5865039' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (43, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T12:36:38.2441901' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (44, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T12:49:16.6056546' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (45, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T12:52:20.8920046' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (46, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T13:01:55.9695298' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (47, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T13:15:21.0721029' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (48, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T13:17:38.9899812' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (49, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T13:33:17.1618882' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (50, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T13:35:26.9404794' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (51, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T13:39:27.9932693' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (52, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T13:42:36.0687806' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (53, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T15:18:03.8839667' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (54, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T15:18:44.5462052' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (55, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T15:22:13.6949990' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (56, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T15:24:05.6197037' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (57, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T15:26:59.7713141' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (58, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T15:39:26.6534463' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (59, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T15:52:44.1179775' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (60, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T15:53:47.2826740' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (61, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T15:56:50.6244066' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (62, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:02:08.4498173' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (63, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:04:33.8222579' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (64, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:08:22.1193416' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (65, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:10:03.2036641' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (66, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:15:02.7395394' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (67, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:15:58.1371210' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (68, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:18:58.4237766' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (69, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:19:32.3476212' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (70, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:26:37.0311491' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (71, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:27:14.3139374' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (72, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:28:31.1663963' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (73, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:29:27.3745852' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (74, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-21T16:30:36.8752715' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1070, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-24T20:39:03.0342601' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1071, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-24T20:39:57.0812567' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1072, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-24T20:40:56.3833449' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1073, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-24T20:41:21.7022941' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1074, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-24T20:43:49.4538931' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1075, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-24T20:44:16.0897464' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1076, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-24T20:47:13.0090579' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1077, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-09-24T20:48:19.6068066' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1078, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-02T08:16:59.1510375' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1079, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-02T08:19:52.7665788' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1080, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-02T08:20:48.6383752' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1081, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-02T08:21:31.5657620' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1082, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-08T19:29:19.1110803' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1083, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-08T19:29:59.3203029' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1084, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-08T21:08:38.6690263' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1085, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-08T21:09:12.4929422' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1086, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-08T21:13:33.4629842' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1087, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-08T21:19:30.7643012' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1088, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-08T21:20:51.0644879' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1089, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-08T21:24:14.0920502' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1090, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-09T08:51:56.5697620' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1091, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-09T08:55:34.1255986' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
INSERT [dbo].[Orders] ([OrderId], [AppUserId], [OrderDate], [OrderStatus], [PaymentStatus], [Note], [Address], [Phone], [PaymentMethod]) VALUES (1092, N'a7dad34e-48ff-43ba-9cd1-eddb95837596', CAST(N'2024-10-09T08:58:17.5327677' AS DateTime2), N'Chờ xác nhận', 1, N'', N'Gò Dầu, Tân Quý, Tân Phú, Sài Gòn', N'0369656502', N'Thanh toán trực tuyến')
SET IDENTITY_INSERT [dbo].[Orders] OFF
GO
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345671', N'Sản phẩm 1', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 98, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345672', N'Sản phẩm 2', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 97, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345673', N'Sản phẩm 3', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 99, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345674', N'Sản phẩm 4', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345675', N'Sản phẩm 5', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345676', N'Sản phẩm 6', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 98, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345677', N'Sản phẩm 7', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345678', N'Sản phẩm 8', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 99, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345679', N'Sản phẩm 9', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345680', N'Sản phẩm 10', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345682', N'Sản phẩm 11', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345683', N'Sản phẩm 12', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345684', N'Sản phẩm 13', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345685', N'Sản phẩm 14', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345686', N'Sản phẩm 15', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345687', N'Sản phẩm 16', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345688', N'Sản phẩm 17', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345689', N'Sản phẩm 18', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345690', N'Sản phẩm A', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(150000.00 AS Decimal(18, 2)), 1, 100, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345692', N'Sản phẩm V', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(77000.00 AS Decimal(18, 2)), 12, 40, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345693', N'Sản phẩm J', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(89000.00 AS Decimal(18, 2)), 9, 10, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345694', N'Sản phẩm R', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(200000.00 AS Decimal(18, 2)), 7, 5, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345695', N'Sản phẩm E', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(39000.00 AS Decimal(18, 2)), 20, 9, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345696', N'Sản phẩm L', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(42000.00 AS Decimal(18, 2)), 50, -17, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345697', N'Sản phẩm X', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(58000.00 AS Decimal(18, 2)), 5, 30, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345698', N'Sản phẩm S', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(69000.00 AS Decimal(18, 2)), 1, 17, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#12345699', N'Sản phẩm Q', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(75000.00 AS Decimal(18, 2)), 0, 22, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#39670150', N'Sản phẩm XXX', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 99, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#57765860', N'Sản phẩm XXX', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 99, 350, N'Desc...', 1, N'#000000', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [ProductImage], [Price], [Discount], [Inventory], [ValueUnit], [Description], [UnitId], [ColorId], [CategoryId]) VALUES (N'#66469271', N'Sản phẩm XXX', N'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/454226325_514883924327042_960894268109165568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p6dX8h6f9ucQ7kNvgHJ8bqm&_nc_ht=scontent.fsgn5-10.fna&oh=03_Q7cD1QGPKgnRExV3TF1HARm0ATIboH65OdqIXWWnnEZ7f9gWLQ&oe=6714BA8B', CAST(50000.00 AS Decimal(18, 2)), 1, 99, 350, N'Desc...', 1, N'#000000', 1)
GO
SET IDENTITY_INSERT [dbo].[Units] ON 

INSERT [dbo].[Units] ([UnitId], [UnitName]) VALUES (1, N'g')
SET IDENTITY_INSERT [dbo].[Units] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetRoleClaims_RoleId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetRoleClaims_RoleId] ON [dbo].[AspNetRoleClaims]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[NormalizedName] ASC
)
WHERE ([NormalizedName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserClaims_UserId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserClaims_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserLogins_UserId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserLogins_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserRoles_RoleId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserRoles_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [EmailIndex]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [EmailIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedUserName] ASC
)
WHERE ([NormalizedUserName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Assesses_AppUserId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Assesses_AppUserId] ON [dbo].[Assesses]
(
	[AppUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Assesses_ProductId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Assesses_ProductId] ON [dbo].[Assesses]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Carts_AppUserId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Carts_AppUserId] ON [dbo].[Carts]
(
	[AppUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Carts_ProductId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Carts_ProductId] ON [dbo].[Carts]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Favourites_AppUserId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Favourites_AppUserId] ON [dbo].[Favourites]
(
	[AppUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Favourites_ProductId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Favourites_ProductId] ON [dbo].[Favourites]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_OrderDetails_ProductId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_OrderDetails_ProductId] ON [dbo].[OrderDetails]
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Orders_AppUserId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Orders_AppUserId] ON [dbo].[Orders]
(
	[AppUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Products_CategoryId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Products_CategoryId] ON [dbo].[Products]
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Products_ColorId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Products_ColorId] ON [dbo].[Products]
(
	[ColorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Products_UnitId]    Script Date: 11/1/2024 7:32:54 PM ******/
CREATE NONCLUSTERED INDEX [IX_Products_UnitId] ON [dbo].[Products]
(
	[UnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT (N'') FOR [Address]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT (N'') FOR [Phone]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT (N'') FOR [PaymentMethod]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[Assesses]  WITH CHECK ADD  CONSTRAINT [FK_Assesses_AspNetUsers_AppUserId] FOREIGN KEY([AppUserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Assesses] CHECK CONSTRAINT [FK_Assesses_AspNetUsers_AppUserId]
GO
ALTER TABLE [dbo].[Assesses]  WITH CHECK ADD  CONSTRAINT [FK_Assesses_Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([ProductId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Assesses] CHECK CONSTRAINT [FK_Assesses_Products_ProductId]
GO
ALTER TABLE [dbo].[Carts]  WITH CHECK ADD  CONSTRAINT [FK_Carts_AspNetUsers_AppUserId] FOREIGN KEY([AppUserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Carts] CHECK CONSTRAINT [FK_Carts_AspNetUsers_AppUserId]
GO
ALTER TABLE [dbo].[Carts]  WITH CHECK ADD  CONSTRAINT [FK_Carts_Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([ProductId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Carts] CHECK CONSTRAINT [FK_Carts_Products_ProductId]
GO
ALTER TABLE [dbo].[Favourites]  WITH CHECK ADD  CONSTRAINT [FK_Favourites_AspNetUsers_AppUserId] FOREIGN KEY([AppUserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Favourites] CHECK CONSTRAINT [FK_Favourites_AspNetUsers_AppUserId]
GO
ALTER TABLE [dbo].[Favourites]  WITH CHECK ADD  CONSTRAINT [FK_Favourites_Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([ProductId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Favourites] CHECK CONSTRAINT [FK_Favourites_Products_ProductId]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetails_Orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([OrderId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_OrderDetails_Orders_OrderId]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetails_Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([ProductId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_OrderDetails_Products_ProductId]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_AspNetUsers_AppUserId] FOREIGN KEY([AppUserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_AspNetUsers_AppUserId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Categories_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([CategoryId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Categories_CategoryId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Colors_ColorId] FOREIGN KEY([ColorId])
REFERENCES [dbo].[Colors] ([ColorId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Colors_ColorId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Units_UnitId] FOREIGN KEY([UnitId])
REFERENCES [dbo].[Units] ([UnitId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Units_UnitId]
GO
USE [master]
GO
ALTER DATABASE [dbblueberry] SET  READ_WRITE 
GO
