using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MovieDB.Models;

namespace MovieDB.Controllers
{
    public class MoviesController : Controller
    {
        // GET: Movies
        public ActionResult Random()
        {
            Movie movie = new Movie()
            {
                Id = 1,
                Name = "Swades"

            };
           return View(movie);
           // return HttpNotFound();
           // return new EmptyResult();
          //  return RedirectToAction("Index", "Home", new { page=1,sortBy="Name"});
        }
    }
}