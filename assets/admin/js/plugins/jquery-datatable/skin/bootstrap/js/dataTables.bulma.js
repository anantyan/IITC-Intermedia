! function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) {
        return e(a, window, document)
    }) : "object" == typeof exports ? module.exports = function (a, t) {
        return a || (a = window), t && t.fn.dataTable || (t = require("datatables.net")(a, t).$), e(t, a, a.document)
    } : e(jQuery, window, document)
}(function (e, a, t) {
    var n = e.fn.dataTable;
    return e.extend(!0, n.defaults, {
        dom: "<'columns'<'column is-6'l><'column is-6'f>><'columns'<'column is-12 table-container'tr>><'columns'<'column is-5'i><'column is-7'p>>",
        renderer: "bulma"
    }), e.extend(n.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bulma",
        sFilterInput: "input is-small",
        sLengthSelect: "input is-small",
        sProcessing: "dataTables_processing panel",
        sPageButton: "pagination-link",
        sPagePrevious: "pagination-previous",
        sPageNext: "pagination-next",
        sPageButtonActive: "is-current"
    }), n.ext.renderer.pageButton.bulma = function (a, i, s, r, l, o) {
        var u, d, c, p = new n.Api(a),
            f = a.oClasses,
            g = a.oLanguage.oPaginate,
            b = a.oLanguage.oAria.paginate || {},
            m = 0,
            x = function (t, n) {
                var i, r, c, v, w = function (a) {
                    a.preventDefault(), !e(a.currentTarget).is("[disabled]") && !e(a.currentTarget).is("#table_ellipsis") && p.page() != a.data.action && p.page(a.data.action).draw("page")
                };
                for (i = 0, r = n.length; i < r; i++)
                    if (v = n[i], e.isArray(v)) x(t, v);
                    else {
                        d = u = "";
                        var T = !1;
                        switch (v) {
                            case "ellipsis":
                                u = "&#x2026;", T = !0;
                                break;
                            case "first":
                                u = g.sFirst, T = v + !(0 < l);
                                break;
                            case "previous":
                                u = g.sPrevious, T = !(0 < l);
                                break;
                            case "next":
                                u = g.sNext, T = !(l < o - 1);
                                break;
                            case "last":
                                u = g.sLast, T = v + !(l < o - 1);
                                break;
                            default:
                                u = v + 1, d = l === v ? " is-current" : "", T = !1
                        }
                        u && (c = e("<li>", {
                            id: 0 === s && "string" == typeof v ? a.sTableId + "_" + v : null
                        }).append(e("<a>", {
                            class: f.sPageButton + " " + d,
                            href: "#",
                            "aria-controls": a.sTableId,
                            "aria-label": b[v],
                            "data-dt-idx": m,
                            tabindex: a.iTabIndex,
                            disabled: T
                        }).html(u)).appendTo(t), a.oApi._fnBindAction(c, {
                            action: v
                        }, w), m++)
                    }
            };
        try {
            c = e(i).find(t.activeElement).data("dt-idx")
        } catch (e) {}
        x(e(i).empty().html('<ul class="pagination-list"/>').children("ul"), r), c && e(i).find("[data-dt-idx=" + c + "]").focus()
    }, n
});