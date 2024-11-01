using be_booktour.Dtos;
using be_booktour.Interfaces;
using be_booktour.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace be_booktour.Controllers
{
    [Route("api/image")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IImageRepository _imageRepository;
        // Đường dẫn đến thư mục wwwroot/images trong project
        private static string UPLOAD_DIR = "wwwroot/images";

        public ImageController(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
        }

        [HttpGet]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> GetImages()
        {
            MyResponse<List<Image>> response = new MyResponse<List<Image>>();
            List<Image> images = await _imageRepository.GetImagesAsync();
            response.StatusCode = 200;
            response.Message = "Lấy danh sách ảnh thành công";
            response.Data = images;
            return Ok(response);
        }

        [HttpPost]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> UploadImage([FromForm] IFormFile[] files)
        {
            MyResponse<List<Image>> response = new MyResponse<List<Image>>();
            List<string> allowedExtensions = new List<string> { ".jpg", ".jpeg", ".png", ".gif" };
            List<Image> images = new List<Image>();
            try
            {
                foreach (var file in files)
                {
                    string extension = Path.GetExtension(file.FileName);
                    if (!allowedExtensions.Contains(extension))
                    {
                        response.StatusCode = 400;
                        response.Message = "Định dạng file không hợp lệ";
                        return BadRequest(response);
                    }
                    if (file.Length > 2 * 1024 * 1024)
                    {
                        response.StatusCode = 400;
                        response.Message = "Dung lượng file không được vượt quá 2MB";
                        return BadRequest(response);
                    }
                    Image image = new Image();
                    // Tạo tên file mới là ngày giờ + tên file gốc
                    string fileName = DateTime.Now.ToString("yyyyMMddHHmmss") + "_" + file.FileName;
                    // Xóa dấu cách trong tên file
                    fileName = fileName.Replace(" ", string.Empty);
                    // Đường dẫn đến file
                    string filePath = Path.Combine(UPLOAD_DIR, fileName);
                    // Tạo file mới
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(fileStream);
                    }
                    image.ImageName = fileName;
                    image.Url = "http://localhost:8080/images/" + fileName;
                    image = await _imageRepository.SaveImageAsync(image);
                    images.Add(image);
                }
                response.StatusCode = 201;
                response.Message = "Upload ảnh thành công";
                response.Data = images;
                return Ok(response);
            }
            catch (System.Exception ex)
            {
                response.StatusCode = 500;
                response.Message = "Lỗi máy chủ";
                return Ok(response);
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "TourManager")]
        public async Task<IActionResult> DeleteImage(int id)
        {
            MyResponse<string> response = new MyResponse<string>();
            try
            {
                Image image = await _imageRepository.GetImageByIdAsync(id);
                if (image == null)
                {
                    response.StatusCode = 404;
                    response.Message = "Không tìm thấy ảnh";
                    return NotFound(response);
                }
                string filePath = Path.Combine(UPLOAD_DIR, image.ImageName);
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }
                await _imageRepository.DeleteImageAsync(image);
                response.StatusCode = 200;
                response.Message = "Xóa ảnh thành công";
            }
            catch (System.Exception)
            {
                response.StatusCode = 500;
                response.Message = "Lỗi server";
            }
            return Ok(response);
        }

        // Upload nhiều ảnh
        // [HttpPost]
        // [Authorize(Roles = "TourManager")]
        // public async Task<IActionResult> UploadImage([FromForm] IFormFile[] files)
        // {
        //     MyResponse<List<Image>> response = new MyResponse<List<Image>>();
        //     List<string> allowedExtensions = new List<string> { ".jpg", ".jpeg", ".png", ".gif" };
        //     List<Image> images = new List<Image>();
        //     try
        //     {
        //         foreach (var file in files)
        //         {
        //             string extension = Path.GetExtension(file.FileName);
        //             if (!allowedExtensions.Contains(extension))
        //             {
        //                 response.StatusCode = 400;
        //                 response.Message = "Định dạng file không hợp lệ";
        //                 return BadRequest(response);
        //             }
        //             if (file.Length > 2 * 1024 * 1024)
        //             {
        //                 response.StatusCode = 400;
        //                 response.Message = "Dung lượng file không được vượt quá 2MB";
        //                 return BadRequest(response);
        //             }
        //             Image image = new Image();
        //             // Tạo tên file mới là ngày giờ + tên file gốc
        //             string fileName = DateTime.Now.ToString("yyyyMMddHHmmss") + file.FileName;
        //             // Xóa dấu cách trong tên file
        //             fileName = fileName.Replace(" ", string.Empty);
        //             // Đường dẫn đến file
        //             string filePath = Path.Combine(UPLOAD_DIR, fileName);
        //             // Tạo file mới
        //             using (var fileStream = new FileStream(filePath, FileMode.Create))
        //             {
        //                 await file.CopyToAsync(fileStream);
        //             }


        //             image.ImageName = fileName;
        //             image.Url = "http://localhost:8080/images/" + fileName;
        //             image = await _imageRepository.SaveImageAsync(image);
        //             images.Add(image);
        //         }
        //         response.StatusCode = 201;
        //         response.Message = "Upload ảnh thành công";
        //         response.Data = images;
        //     }
        //     catch (System.Exception)
        //     {
        //         response.StatusCode = 500;
        //         response.Message = "Lỗi server";
        //     }
        //     return Ok(response);

        // }
    }
}